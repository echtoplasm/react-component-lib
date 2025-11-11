# React Component Library - Project Ideas Reference

## Current Components (Completed)
- Modal component
- Navbar
- Lucide icon demo
- Stopwatch
- Counter
- Dropdown menu
- API Fetch component (JSONPlaceholder)

---

## High Priority Additions

### Authentication & Security
- **JWT Authentication Demo**
  - Login form with token storage
  - Protected route example
  - Token refresh logic
  - Logout functionality
  
- **Express Backend Integration**
  - `/api/login` endpoint
  - `/api/protected` endpoint
  - JWT middleware examples
  
- **OAuth Implementation**
  - Google OAuth button
  - GitHub OAuth flow
  - Callback handling
  - User profile display

---

## Advanced UI Components

### Forms & Input
- **Multi-step Form Wizard**
  - Progress indicator
  - Validation per step
  - State management across steps
  
- **Form with Validation**
  - Real-time error display
  - Disable submit until valid
  - Custom validation rules
  
- **Autocomplete/Typeahead**
  - Search with suggestions
  - Keyboard navigation
  - API integration

- **Multi-select Dropdown**
  - Checkboxes for options
  - Select all/none
  - Search filter

### Data Display
- **Data Table**
  - Sorting columns
  - Filtering
  - Pagination
  - Row selection
  
- **Infinite Scroll**
  - Load more on scroll
  - Intersection Observer API
  - Loading states
  
- **Virtual Scrolling**
  - Render only visible items
  - Performance for huge lists
  - Using react-window

- **Chart/Graph Component**
  - Line charts
  - Bar charts
  - Using recharts or chart.js

### Interaction Components
- **Drag and Drop**
  - File uploader
  - Sortable list
  - Kanban board columns
  
- **Image Carousel/Slider**
  - Swipe support
  - Thumbnail navigation
  - Auto-play option
  
- **Image Lightbox**
  - Click to expand
  - Previous/next navigation
  - Close on backdrop click

- **Tabs Component**
  - Switch between panels
  - Active state styling
  - URL parameter sync

- **Accordion**
  - Collapsible sections
  - Single/multiple open
  - FAQ style

### Notifications & Feedback
- **Toast Notifications**
  - Success/error/info types
  - Auto-dismiss with timer
  - Queue system for multiple
  - Custom positioning
  
- **Confirmation Dialog**
  - "Are you sure?" prompts
  - Cancel/confirm actions
  - Custom messages

### Timers & Utilities
- **Pomodoro Timer**
  - Work/break intervals
  - Notifications
  - Session tracking
  
- **Countdown Timer**
  - Set custom duration
  - Alarm/notification
  - Pause/resume

---

## State Management Examples

### Context API
- **Theme Switcher**
  - Dark/light mode toggle
  - Persist to localStorage
  - Apply across all components

- **Global State Demo**
  - User authentication state
  - Shopping cart
  - Notification system

### Advanced Hooks
- **useReducer Shopping Cart**
  - Add/remove items
  - Update quantities
  - Calculate totals
  
- **Custom Hooks Library**
  - `useLocalStorage` - Sync state with localStorage
  - `useDebounce` - Delay state updates
  - `useFetch` - Reusable data fetching
  - `useMediaQuery` - Responsive breakpoints
  - `useOnClickOutside` - Detect outside clicks

---

## Performance Optimization Demos

- **Memoization Examples**
  - React.memo for components
  - useMemo for expensive calculations
  - useCallback for function references
  
- **Lazy Loading**
  - Code splitting with React.lazy
  - Suspense boundaries
  - Route-based splitting
  
- **Debounced Search**
  - Wait for user to stop typing
  - Reduce API calls
  - Loading states

---

## Real-time & Advanced Features

### WebSockets
- **Real-time Chat Component**
  - Send/receive messages
  - User presence
  - Typing indicators

### Editors
- **Code Editor**
  - Syntax highlighting (Monaco/CodeMirror)
  - Theme switching
  - Line numbers
  
- **Markdown Editor**
  - Live preview
  - Side-by-side view
  - Toolbar with formatting

- **Rich Text Editor**
  - Bold, italic, lists
  - Image uploads
  - HTML output

### File Handling
- **File Tree Explorer**
  - Collapsible folders
  - File icons
  - Nested structure
  
- **Drag & Drop File Upload**
  - Visual feedback
  - Multiple files
  - Progress bars

---

## Game/Interactive

- **Phaser.js Game Integration**
  - 2D game in React container
  - Platformer demo
  - Top-down shooter
  - Endless runner
  
- **Calculator**
  - Basic operations
  - Memory functions
  - Keyboard support
  
- **Canvas Drawing Tool**
  - Signature pad
  - Color picker
  - Brush sizes
  - Clear/undo

---

## Complex Combined Components

### Dashboard
- Combine multiple features:
  - API data fetching
  - Charts/graphs
  - Cards with stats
  - Real-time updates

### Kanban Board
- Drag and drop cards
- Multiple columns
- Add/edit/delete tasks
- State persistence

### Todo App (Advanced)
- CRUD operations
- Filters (all/active/completed)
- Local storage persistence
- Drag to reorder
- Categories/tags

---

## Authentication Patterns

### JWT Flow Example
```javascript
// Login
const login = async (username, password) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await res.json();
  localStorage.setItem('token', data.token);
  setToken(data.token);
};

// Protected Request
const fetchProtected = async () => {
  const res = await fetch('/api/protected', {
    headers: { 
      'Authorization': `Bearer ${token}` 
    }
  });
  return await res.json();
};
```

### OAuth Flow
1. User clicks "Login with Google"
2. Redirect to OAuth provider
3. User authorizes
4. Callback with auth code
5. Exchange code for token
6. Store token and user info

---

## Cool API Integration Ideas

- **Weather Dashboard** - OpenMeteo API
- **GitHub Profile Viewer** - GitHub API
- **Crypto Price Tracker** - CoinGecko API
- **Movie Search** - TMDB API
- **News Aggregator** - News API
- **Recipe Finder** - Spoonacular API
- **Dictionary/Thesaurus** - Free Dictionary API

---

## Notes

- Build components in isolation first
- Make them reusable with props
- Document props and usage examples
- Consider accessibility (ARIA labels, keyboard nav)
- Add loading and error states
- Test edge cases
- Keep styling consistent across components

**Goal:** Create a comprehensive reference library that demonstrates modern React patterns, performance optimization, state management, and real-world integrations.
