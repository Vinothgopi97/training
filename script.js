// To load topics.xlsx in the browser, you must serve your files using a local web server (not open index.html directly).
// For example, run `npx serve .` or `python -m http.server` in this folder and open http://localhost:PORT/index.html in your browser.
// This is required due to browser security (CORS) restrictions on file:// URLs.

document.addEventListener('DOMContentLoaded', function() {
    fetch('topics.json')
      .then(response => response.json())
      .then(data => {
        const topics = data.topics;

        // Create left menu
        let leftMenu = document.getElementById('left-menu');
        if (!leftMenu) {
          leftMenu = document.createElement('div');
          leftMenu.id = 'left-menu';
          leftMenu.style.width = '300px';
          leftMenu.style.float = 'left';
          leftMenu.style.marginRight = '2em';
          document.body.insertBefore(leftMenu, document.body.firstChild);
        }
        leftMenu.innerHTML = ''; // Clear previous

        // Add heading to the side menu (fixed)
        const menuHeading = document.createElement('h1');
        menuHeading.textContent = 'Topics Reference List';
        menuHeading.className = 'my-4 text-primary';
        leftMenu.appendChild(menuHeading);

        // Create a scrollable container for menu items
        const menuScroll = document.createElement('div');
        menuScroll.style.flex = '1 1 auto';
        menuScroll.style.overflowY = 'auto';
        menuScroll.style.display = 'flex';
        menuScroll.style.flexDirection = 'column';
        // Fill available height except heading
        menuScroll.style.height = '100%';
        leftMenu.appendChild(menuScroll);

        // Create center content area
        let centerContent = document.getElementById('center-content');
        if (!centerContent) {
          centerContent = document.createElement('div');
          centerContent.id = 'center-content';
          centerContent.style.marginLeft = '320px';
          document.body.appendChild(centerContent);
        }
        centerContent.innerHTML = '<div><h2 class="text-secondary mb-3">Welcome to the Developer Training based on Java</h2><p>Select a subtopic to view details.</p><div/>';

        topics.forEach((topic, topicIdx) => {
          // Topic button
          const topicBtn = document.createElement('div');
          topicBtn.className = 'topic-menu-item';
          topicBtn.style.cursor = 'pointer';
          topicBtn.style.fontWeight = 'bold';
          topicBtn.style.marginBottom = '0.5em';
          topicBtn.textContent = `${topic.sl_no}. ${topic.title}`;

          // Subtopics container (hidden by default)
          const subtopicsDiv = document.createElement('div');
          subtopicsDiv.style.display = 'none';
          subtopicsDiv.style.marginLeft = '1em';

          // Handle subtopics as array of objects or array of strings
          if (Array.isArray(topic.subtopics) && topic.subtopics.length > 0 && typeof topic.subtopics[0] === 'object') {
            topic.subtopics.forEach((sub, subIdx) => {
              const subBtn = document.createElement('div');
              subBtn.className = 'subtopic-menu-item';
              subBtn.style.cursor = 'pointer';
              subBtn.style.margin = '0.2em 0';
              subBtn.textContent = `${sub.sl_no}. ${sub.title}`;
              subBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                // Remove active from all subtopics
                document.querySelectorAll('.subtopic-menu-item.active').forEach(el => el.classList.remove('active'));
                subBtn.classList.add('active');
                // Remove content-container if present (always remove before loading new content)
                document.querySelectorAll('#content-container').forEach(el => el.remove());
                // If subtopic has content_html, load it and return
                if (sub.content_html) {
                    // Remove centerContent content as well
                    if (centerContent) centerContent.innerHTML = '';
                    loadSubtopicContent(sub);
                    return;
                }
                // Show subtopic details in center
                centerContent.innerHTML = '';

                // Create fixed title container
                const fixedTitleDiv = document.createElement('div');
                fixedTitleDiv.className = 'topic-title-fixed';
                fixedTitleDiv.style.textAlign = 'center';

                const title = document.createElement('h2');
                title.className = 'text-secondary mb-3';
                title.textContent = sub.title;
                fixedTitleDiv.appendChild(title);
                centerContent.appendChild(fixedTitleDiv);

                // Create scrollable content container
                const scrollableDiv = document.createElement('div');
                scrollableDiv.className = 'center-scrollable-content';

                if (sub.description) {
                  const desc = document.createElement('p');
                  desc.textContent = sub.description;
                  scrollableDiv.appendChild(desc);
                }

                // Assignment array rendering
                if (Array.isArray(sub.assignment) && sub.assignment.length > 0) {
                  const assignDiv = document.createElement('div');
                  assignDiv.className = 'assignment';
                  const assignTitle = document.createElement('strong');
                  assignTitle.textContent = 'Assignment:';
                  assignDiv.appendChild(assignTitle);

                  const assignList = document.createElement('ol');
                  sub.assignment.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    assignList.appendChild(li);
                  });
                  assignDiv.appendChild(assignList);

                  // If there is a reference to a Microsoft Form, embed it below the assignment list
                  // if (Array.isArray(sub.references)) {
                  //   sub.references.forEach(ref => {
                  //     if (ref.link && ref.link.startsWith('https://forms.cloud.microsoft/')) {
                  //       // Try to embed the form in an iframe
                  //       const iframe = document.createElement('iframe');
                  //       iframe.src = ref.link;
                  //       iframe.width = "640";
                  //       iframe.height = "800";
                  //       iframe.frameBorder = "0";
                  //       iframe.allowFullscreen = true;
                  //       iframe.style.border = "1px solid #ccc";
                  //       iframe.style.marginTop = "0.5em";
                  //       // If iframe fails to load, show as link
                  //       iframe.onerror = function() {
                  //         if (!iframe._fallbackShown) {
                  //           const formTitle = document.createElement('div');
                  //           const formLink = document.createElement('a');
                  //           formLink.href = ref.link;
                  //           formLink.textContent = ref.title;
                  //           formLink.target = '_blank';
                  //           formTitle.appendChild(formLink);
                  //           formTitle.style.marginBottom = '0.5em';
                  //           assignDiv.appendChild(formTitle);
                  //           iframe._fallbackShown = true;
                  //         }
                  //       };
                  //       assignDiv.appendChild(iframe);
                  //     }
                  //   });
                  // }

                  scrollableDiv.appendChild(assignDiv);
                }

                // References or Submit (for assignment)
                if (Array.isArray(sub.references) && sub.references.length > 0) {
                  let msFormHandled = false;
                  // For assignment, try to embed MS Form in iframe, else show as link if iframe fails
                  if (Array.isArray(sub.assignment) && sub.assignment.length > 0) {
                    sub.references.forEach(ref => {
                      if (ref.link && ref.link.startsWith('https://forms.cloud.microsoft/')) {
                        if (!msFormHandled) {
                          const iframe = document.createElement('iframe');
                          iframe.src = ref.link;
                          iframe.width = "640";
                          iframe.height = "800";
                          iframe.frameBorder = "0";
                          iframe.allowFullscreen = true;
                          iframe.style.border = "1px solid #ccc";
                          iframe.style.marginTop = "0.5em";
                          let fallbackShown = false;
                          iframe.onerror = function() {
                            if (!fallbackShown) {
                              const formTitle = document.createElement('div');
                              const formLink = document.createElement('a');
                              formLink.href = ref.link;
                              formLink.textContent = ref.title;
                              formLink.target = '_blank';
                              formTitle.appendChild(formLink);
                              formTitle.style.marginBottom = '0.5em';
                              scrollableDiv.appendChild(formTitle);
                              fallbackShown = true;
                              iframe.remove();
                            }
                          };
                          // Add a timeout fallback in case onerror doesn't fire (e.g., CORS blocks)
                          setTimeout(() => {
                            // If iframe didn't load after 5s, show link
                            if (!iframe.contentWindow || !iframe.contentDocument || iframe.contentDocument.body.innerHTML === "") {
                              if (!fallbackShown) {
                                const formTitle = document.createElement('div');
                                const formLink = document.createElement('a');
                                formLink.href = ref.link;
                                formLink.textContent = ref.title;
                                formLink.target = '_blank';
                                formTitle.appendChild(formLink);
                                formTitle.style.marginBottom = '0.5em';
                                scrollableDiv.appendChild(formTitle);
                                fallbackShown = true;
                                iframe.remove();
                              }
                            }
                          }, 5000);
                          scrollableDiv.appendChild(iframe);
                          msFormHandled = true;
                        }
                      }
                    });
                  }

                  // Only show the references section if there are non-MS Form links, or if not assignment
                  const hasNonMsFormLinks = sub.references.some(ref =>
                    !(Array.isArray(sub.assignment) && sub.assignment.length > 0 && ref.link && ref.link.startsWith('https://forms.cloud.microsoft/'))
                  );
                  if (hasNonMsFormLinks || !(Array.isArray(sub.assignment) && sub.assignment.length > 0)) {
                    const refDiv = document.createElement('div');
                    refDiv.className = 'references';
                    const refList = document.createElement('ul');
                    sub.references.forEach(ref => {
                      // For assignment, skip MS Form links here (already shown above)
                      if (Array.isArray(sub.assignment) && sub.assignment.length > 0 && ref.link && ref.link.startsWith('https://forms.cloud.microsoft/')) {
                        return;
                      }
                      const li = document.createElement('li');
                      // Check for YouTube short link
                      if (ref.link && ref.link.startsWith('https://youtu.be/')) {
                        // Extract video ID
                        const videoId = ref.link.split('https://youtu.be/')[1].split('?')[0];
                        // Embed YouTube video
                        const iframe = document.createElement('iframe');
                        iframe.width = "560";
                        iframe.height = "315";
                        iframe.src = `https://www.youtube.com/embed/${videoId}`;
                        iframe.title = ref.title;
                        iframe.frameBorder = "0";
                        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                        iframe.allowFullscreen = true;
                        // Add title as link above video
                        const videoTitle = document.createElement('div');
                        const videoLink = document.createElement('a');
                        videoLink.href = ref.link;
                        videoLink.textContent = ref.title;
                        videoLink.target = '_blank';
                        videoTitle.appendChild(videoLink);
                        videoTitle.style.marginBottom = '0.5em';
                        li.appendChild(videoTitle);
                        li.appendChild(iframe);
                      } else if (ref.link && ref.link.startsWith('https://youtube.com/shorts/')) {
                        // Handle YouTube Shorts
                        const shortsId = ref.link.split('https://youtube.com/shorts/')[1].split('?')[0].split('/')[0];
                        const iframe = document.createElement('iframe');
                        iframe.width = "560";
                        iframe.height = "315";
                        iframe.src = `https://www.youtube.com/embed/${shortsId}`;
                        iframe.title = ref.title;
                        iframe.frameBorder = "0";
                        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                        iframe.allowFullscreen = true;
                        const videoTitle = document.createElement('div');
                        const videoLink = document.createElement('a');
                        videoLink.href = ref.link;
                        videoLink.textContent = ref.title;
                        videoLink.target = '_blank';
                        videoTitle.appendChild(videoLink);
                        videoTitle.style.marginBottom = '0.5em';
                        li.appendChild(videoTitle);
                        li.appendChild(iframe);
                      } else if (ref.link && ref.link.startsWith('https://forms.cloud.microsoft/')) {
                        // (skip, already handled above)
                      } else if (ref.link) {
                        // Only show the title as a link, do not load iframe
                        const pageTitle = document.createElement('div');
                        const pageLink = document.createElement('a');
                        pageLink.href = ref.link;
                        pageLink.textContent = ref.title;
                        pageLink.target = '_blank';
                        pageTitle.appendChild(pageLink);
                        pageTitle.style.marginBottom = '0.5em';
                        li.appendChild(pageTitle);
                      }
                      refList.appendChild(li);
                    });
                    refDiv.appendChild(refList);
                    scrollableDiv.appendChild(refDiv);
                  }
                }

                centerContent.appendChild(scrollableDiv);
              });
              subtopicsDiv.appendChild(subBtn);
            });
          } else if (Array.isArray(topic.subtopics)) {
            // If subtopics is an array of strings
            topic.subtopics.forEach((sub, subIdx) => {
              const subBtn = document.createElement('div');
              subBtn.className = 'subtopic-menu-item';
              subBtn.style.cursor = 'pointer';
              subBtn.style.margin = '0.2em 0';
              subBtn.textContent = sub;
              subBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                document.querySelectorAll('.subtopic-menu-item.active').forEach(el => el.classList.remove('active'));
                subBtn.classList.add('active');
                centerContent.innerHTML = `<h2 class="text-secondary mb-3">${sub}</h2>`;
              });
              subtopicsDiv.appendChild(subBtn);
            });
          }

          // Expand/collapse on topic click
          topicBtn.addEventListener('click', function() {
            // Remove active from all topics
            document.querySelectorAll('.topic-menu-item.active').forEach(el => el.classList.remove('active'));
            topicBtn.classList.add('active');
            subtopicsDiv.style.display = (subtopicsDiv.style.display === 'none') ? 'block' : 'none';
          });
          menuScroll.appendChild(topicBtn);
          menuScroll.appendChild(subtopicsDiv);
        });
      })
      .catch(err => {
        console.error('Error loading topics:', err);
      });
});

function loadSubtopicContent(subtopic) {
    if (subtopic.content_html) {
        // Remove any previous content-containers to avoid duplicates
        document.querySelectorAll('#content-container').forEach(el => el.remove());
        let contentContainer = document.createElement('div');
        contentContainer.id = 'content-container';
        contentContainer.style.display = 'flex';
        contentContainer.style.flexDirection = 'column';
        contentContainer.style.alignItems = 'center';
        contentContainer.style.justifyContent = 'center';
        contentContainer.style.marginTop = '2em';
        // Insert after center-content if it exists
        const centerContent = document.getElementById('center-content');
        if (centerContent && centerContent.parentNode) {
            centerContent.parentNode.insertBefore(contentContainer, centerContent.nextSibling);
        } else {
            document.body.appendChild(contentContainer);
        }
        fetch(subtopic.content_html)
            .then(response => {
                if (!response.ok) throw new Error('Failed to load HTML file');
                return response.text();
            })
            .then(html => {
                // Center the loaded HTML
                const htmlWrapper = document.createElement('div');
                htmlWrapper.style.textAlign = 'left';
                htmlWrapper.style.paddingLeft = '22em';
                htmlWrapper.innerHTML = html;
                contentContainer.appendChild(htmlWrapper);

                // Show references below, if any
                if (Array.isArray(subtopic.references) && subtopic.references.length > 0) {
                    const refDiv = document.createElement('div');
                    refDiv.className = 'references';
                    refDiv.style.marginTop = '2em';
                    refDiv.style.width = '100%';
                    refDiv.style.maxWidth = '700px';
                    refDiv.style.textAlign = 'left';
                    const refTitle = document.createElement('h3');
                    refTitle.textContent = 'References';
                    refDiv.appendChild(refTitle);
                    const refList = document.createElement('ul');
                    subtopic.references.forEach(ref => {
                        if (ref.link) {
                            const li = document.createElement('li');
                            // Embed YouTube videos directly
                            if (ref.link.startsWith('https://youtu.be/')) {
                                const videoId = ref.link.split('https://youtu.be/')[1].split('?')[0];
                                const iframe = document.createElement('iframe');
                                iframe.width = "560";
                                iframe.height = "315";
                                iframe.src = `https://www.youtube.com/embed/${videoId}`;
                                iframe.title = ref.title;
                                iframe.frameBorder = "0";
                                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                                iframe.allowFullscreen = true;
                                const videoTitle = document.createElement('div');
                                const videoLink = document.createElement('a');
                                videoLink.href = ref.link;
                                videoLink.textContent = ref.title;
                                videoLink.target = '_blank';
                                videoTitle.appendChild(videoLink);
                                videoTitle.style.marginBottom = '0.5em';
                                li.appendChild(videoTitle);
                                li.appendChild(iframe);
                            } else if (ref.link.startsWith('https://youtube.com/shorts/')) {
                                const shortsId = ref.link.split('https://youtube.com/shorts/')[1].split('?')[0].split('/')[0];
                                const iframe = document.createElement('iframe');
                                iframe.width = "560";
                                iframe.height = "315";
                                iframe.src = `https://www.youtube.com/embed/${shortsId}`;
                                iframe.title = ref.title;
                                iframe.frameBorder = "0";
                                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                                iframe.allowFullscreen = true;
                                const videoTitle = document.createElement('div');
                                const videoLink = document.createElement('a');
                                videoLink.href = ref.link;
                                videoLink.textContent = ref.title;
                                videoLink.target = '_blank';
                                videoTitle.appendChild(videoLink);
                                videoTitle.style.marginBottom = '0.5em';
                                li.appendChild(videoTitle);
                                li.appendChild(iframe);
                            } else if (ref.link.startsWith('https://forms.office.com/') || ref.link.startsWith('https://forms.cloud.microsoft/')) {
                                // Microsoft Forms: show as a clickable link with a note
                                const formNote = document.createElement('div');
                                formNote.style.marginBottom = '0.5em';
                                const formLink = document.createElement('a');
                                formLink.href = ref.link;
                                formLink.textContent = ref.title + " (Open in new tab)";
                                formLink.target = '_blank';
                                formNote.appendChild(formLink);
                                // Optionally, add a message about iframe restrictions
                                const msg = document.createElement('div');
                                msg.style.fontSize = '0.9em';
                                msg.style.color = '#888';
                                msg.textContent = 'Note: Microsoft Forms cannot be embedded due to browser security restrictions. Please open in a new tab.';
                                formNote.appendChild(msg);
                                li.appendChild(formNote);
                            } else {
                                // Only show the title as a link, do not load iframe
                                const a = document.createElement('a');
                                a.href = ref.link;
                                a.textContent = ref.title;
                                a.target = '_blank';
                                li.appendChild(a);
                            }
                            refList.appendChild(li);
                        }
                    });
                    refDiv.appendChild(refList);
                    contentContainer.appendChild(refDiv);
                }
            })
            .catch(err => {
                contentContainer.innerHTML = '<div style="color:red;">Failed to load content.</div>';
            });
    } else {
        // ...existing code for loading other content...
    }
}
