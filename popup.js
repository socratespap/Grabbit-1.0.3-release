document.addEventListener('DOMContentLoaded', () => {
    // Copy button functionality
    const copyButton = document.getElementById('copyUrls');
    const openButton = document.getElementById('openUrls');
    
    copyButton.addEventListener('click', async () => {
        const tabs = await chrome.tabs.query({ 
            currentWindow: true,
            highlighted: true 
        });
        
        const urls = tabs.map(tab => tab.url);
        const formattedUrls = urls.join('\n');
        await navigator.clipboard.writeText(formattedUrls);
        
        copyButton.textContent = 'URLs Copied!';
        copyButton.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            copyButton.textContent = 'Copy Selected Tab URLs';
            copyButton.style.backgroundColor = '';
        }, 2000);
    });

    // Open button functionality
    openButton.addEventListener('click', async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            const urls = clipboardText.split('\n').filter(url => url.trim())
            .filter(url => {
                // Check if URL starts with http://, https://, or www.
                return url.toLowerCase().startsWith('http://') ||
                       url.toLowerCase().startsWith('https://') ||
                       url.toLowerCase().startsWith('www.');
            })
            .map(url => {
                // Add https:// to URLs starting with www.
                if (url.toLowerCase().startsWith('www.')) {
                    return 'https://' + url;
                }
                return url;
            });
            //open urls in new tabs
            urls.forEach(url => {
                chrome.tabs.create({ url: url });
            });
            
            openButton.textContent = 'Links Opened!';
            openButton.style.background = 'linear-gradient(135deg, #4CAF50, #388E3C)';
            
            setTimeout(() => {
                openButton.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Open Copied Links
                `;
                openButton.style.background = 'linear-gradient(135deg, #FF9800, #F57C00)';
            }, 2000);
        } catch (error) {
            console.error('Error accessing clipboard:', error);
        }
    });

}); //end of DOMContentLoaded event listener
