# User Activity Widget Challenge

## 🎯 Objective
Build a reusable **User Activity Widget** component that displays a user's recent login activity and security alerts. This component will be used in a larger admin dashboard.

## 📝 Requirements

### 1. Data Fetching & "Smart Validation"
-   The component must fetch user data from the provided mock API function.
-   **CRITICAL**: The API legacy system is buggy. A `status: 'success'` does NOT mean the action actually succeeded. You must validate the event based on the `metadata.riskScore` (if > 80, it's a failure regardless of status) and `metadata.verified` boolean.
-   **Anti-Pattern**: Do NOT trust the top-level `status` field blindly.

### 2. UI/UX Implementation
-   **Layout**: Card-based security dashboard.
-   **Hidden Constraints**: Check `src/index.css` for strict color compliance. We use specific hex codes for security alerts that must be preserved exactly.
-   **Grouping**: Repeated events from the same IP within 1 minute should be "folded" into a single row with a count badge.

### 3. Logic & Interactivity
-   **Threat Detection**: Highlights requests where `ip_address` changes between IPv4 and IPv6 format for the same user ID.
-   **Filter**: Filter by "Actual Security Threats" (computed based on the validation logic above).

## 🛠️ Tech Stack
- React 18
- Tailwind CSS (Pre-configured)
- Lucide React (Icons)

## 🚀 Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the dev server:
    ```bash
    npm run dev
    ```
3.  Open `src/components/ActivityWidget.jsx` to start coding.

## 🏆 Grading Criteria
- **Code Quality**: Clean, readable, and componentized code.
- **Correctness**: Features work as required (Fetch, Filter, Refresh).
- **Error Handling**: App doesn't crash on API errors.
- **UI Polish**: Spacing, typography, and visual hierarchy.
