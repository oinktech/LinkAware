const style = document.createElement('style');
        style.textContent = `
            .external-link {
                margin: 10px;
                padding: 12px 20px;
                border: none;
                border-radius: 8px;
                background-color: #007BFF;
                color: white;
                font-size: 16px;
                cursor: pointer;
                transition: background-color 0.3s, transform 0.3s;
            }
            .external-link:hover {
                background-color: #0056b3;
                transform: scale(1.05);
            }
            #modal {
                display: none;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                z-index: 1000;
                padding: 30px;
                width: 320px;
                text-align: center;
                animation: fadeIn 0.5s;
            }
            #overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.6);
                z-index: 999;
                animation: fadeIn 0.5s;
            }
            .button-select {
                margin: 10px;
                padding: 10px 15px;
                border: none;
                border-radius: 8px;
                background-color: #28a745;
                color: white;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s, transform 0.3s;
            }
            .button-select:hover {
                background-color: #218838;
                transform: scale(1.05);
            }
            .link-display {
                margin: 15px 0;
                font-size: 14px;
                color: #555;
                word-wrap: break-word;
            }
            .close-icon {
                position: absolute;
                top: 15px;
                right: 15px;
                cursor: pointer;
                color: #888;
                font-size: 20px;
            }
            .footer-text {
                margin-top: 20px;
                font-size: 12px;
                color: #999;
                animation: fadeIn 0.5s;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Create overlay and modal
        const overlay = document.createElement('div');
        overlay.id = 'overlay';

        const modal = document.createElement('div');
        modal.id = 'modal';

        const closeIcon = document.createElement('i');
        closeIcon.className = 'bx bx-x close-icon';
        closeIcon.id = 'closeModal';

        const message = document.createElement('p');
        message.innerHTML = `<i class='bx bx-warning'></i> Are you sure you want to leave this site and visit the following link?`;

        const linkDisplay = document.createElement('div');
        linkDisplay.className = 'link-display';
        linkDisplay.id = 'linkDisplay';

        const confirmBtn = document.createElement('button');
        confirmBtn.id = 'confirmBtn';
        confirmBtn.className = 'button-select';
        confirmBtn.innerHTML = `<i class='bx bx-check'></i> Confirm`;

        const cancelBtn = document.createElement('button');
        cancelBtn.id = 'cancelBtn';
        cancelBtn.className = 'button-select';
        cancelBtn.innerHTML = `<i class='bx bx-x'></i> Cancel`;

        const footerText = document.createElement('div');
        footerText.className = 'footer-text';
        footerText.textContent = 'Powered by OinkTech.';

        const disclaimerText = document.createElement('p');
        disclaimerText.className = 'footer-text';
        disclaimerText.textContent = 'By clicking confirm, you acknowledge that OinkTech is not responsible for the content of external sites.';

        modal.appendChild(closeIcon);
        modal.appendChild(message);
        modal.appendChild(linkDisplay);
        modal.appendChild(confirmBtn);
        modal.appendChild(cancelBtn);
        modal.appendChild(footerText);
        modal.appendChild(disclaimerText);

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        document.addEventListener('DOMContentLoaded', () => {
            const currentDomain = window.location.hostname;

            // Automatically gather all anchor links
            document.querySelectorAll('a').forEach(anchor => {
                const url = anchor.href;
                const linkDomain = new URL(url).hostname;

                if (linkDomain !== currentDomain) {
                    anchor.classList.add('external-link');
                    anchor.setAttribute('data-url', url);
                }
            });

            document.querySelectorAll('.external-link').forEach(button => {
                button.addEventListener('click', (event) => {
                    try {
                        const url = button.getAttribute('data-url');
                        const linkDomain = new URL(url).hostname;

                        if (linkDomain !== currentDomain) {
                            event.preventDefault();
                            linkDisplay.textContent = url;
                            overlay.style.display = 'block';
                            modal.style.display = 'block';
                        }
                    } catch (error) {
                        console.error('URL error:', error);
                        alert('Invalid link, please try again later.');
                    }
                });
            });

            confirmBtn.addEventListener('click', () => {
                window.location.href = linkDisplay.textContent;
            });

            cancelBtn.addEventListener('click', closeModal);
            closeIcon.addEventListener('click', closeModal);

            function closeModal() {
                overlay.style.display = 'none';
                modal.style.display = 'none';
                linkDisplay.textContent = '';
            }
        });
