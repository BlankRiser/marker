
import ReactDOM from 'react-dom';

import Tooltip from '../tooltip';

document.addEventListener('mouseup', (event: MouseEvent) => {
  const selection = window.getSelection();
  const selectedText = selection?.toString().trim();

  if (selectedText && selectedText.length > 0) {
    const range = selection!.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    // Remove existing tooltip if any
    const existingTooltip = document.getElementById('my-extension-tooltip-container');
    if (existingTooltip) {
      existingTooltip.remove();
    }

    // Create container for the tooltip
    const tooltipContainer = document.createElement('div');
    tooltipContainer.id = 'my-extension-tooltip-container';
    tooltipContainer.style.position = 'absolute';
    tooltipContainer.style.left = `${rect.right + window.scrollX}px`;
    tooltipContainer.style.top = `${ window.scrollY}px`;
    tooltipContainer.style.zIndex = '9999';
    document.body.appendChild(tooltipContainer);

    const handleSave = () => {
        console.log('handleSave', selectedText);
      // Send message to background script
      chrome.runtime.sendMessage(
        { action: 'saveText', text: selectedText },
        (response) => {
          console.log('Response:', response);
        }
      );
      tooltipContainer.remove();
    };

    ReactDOM.render(<Tooltip selectedText={selectedText} onSave={handleSave} />, tooltipContainer);
  }
});
