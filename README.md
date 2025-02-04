
# Grabbit Chrome Extension

Grabbit is a powerful Chrome extension that allows users to select multiple links on a webpage using a drag-select interface and perform various actions like opening them in new tabs, new windows, or copying URLs to clipboard.

## Features

- Drag-select multiple links using customizable mouse and keyboard combinations
- Smart selection to automatically remove duplicate URLs
- Customizable selection box colors
- Multiple action types:
  - Open links in new tabs
  - Open links in new windows
  - Copy URLs to clipboard
- Real-time link counter
- Smooth auto-scrolling while selecting
- Configurable settings through an options page

## File Structure

### manifest.json V3
The extension manifest file that defines permissions, content scripts, and basic extension information. It specifies the extension's structure and required permissions like storage, clipboard access, and tab management.

### background.js
A service worker that handles background tasks, specifically managing the creation of new tabs when links are opened.

### grabbit.js
The core content script that implements the drag-select functionality:
- Handles mouse events and selection box creation
- Manages link highlighting and selection
- Implements auto-scrolling
- Processes selected links based on user actions

### popup.js & popup.html
The extension's popup interface that appears when clicking the extension icon:
- Allows quick copying of URLs from selected tabs
- Provides functionality to open copied links
- Features a clean, modern UI with visual feedback

### options.js & options.html
The settings page that allows users to:
- Create and manage custom actions
- Configure key combinations
- Customize selection box colors
- Enable/disable smart selection
- Set action types for different combinations

## Installation

1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked"
5. Select the extension directory

Or directly from the chome extension store:
https://chrome.google.com/webstore/detail/Grabbit/

## Usage

1. Click the extension icon to access quick actions
2. Visit the options page to configure custom actions
3. On any webpage:
	- Hold configured mouse button (and key if set)
	- Drag to select multiple links
	- Release to perform the configured action

## Configuration

Access the options page to:
- Create new actions with custom key combinations
- Set different colors for selection boxes
- Configure smart selection options
- Manage existing actions
- Set default behaviors

## Technical Details

The extension uses:
- Chrome Storage Sync API for settings persistence
- Modern JavaScript features for DOM manipulation
- Chrome Extensions Manifest V3
- Custom event handling for mouse and keyboard interactions

## Tested on

- Windows 10
- Windows 11
- Chrome Latest Version (Version 131.0.6778.205 (Official Build) (64-bit))

## Known Issues

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) ESC will cancel selection but have a conflict with windows shortcuts if pressed with ctrl || shift || alt
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Unknown compatibility with other browsers or operating systems.
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) Add two actions. Action 1: Ctrl + Right Mouse for copy link. Action 2: Right mouse for open links	- Copy links with CTRL + Right Mouse, release the CTRL, it does not change to open links while the opposite works.
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) Add two actions. Action 1: Ctrl + Right Mouse for copy link. Action 2: Ctrl + Left mouse for open links. Only action with right mouse works
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Lifting keyboard key and no action is found for mouse only actions, is still selecting
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Removed unused context menu permission

## Features to be added

- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Open Links/tabs in reverse order
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) Copy links with titles
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+)  Provide different color on add new action
- ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) Append Urls to clipboard. Clipboard = selected links + clipboard
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) Add rating button


## Version 1.0.1 Changelog:

Removed unused context menu permission

## Version 1.0.2 Changelog:

Added activeTab permission
