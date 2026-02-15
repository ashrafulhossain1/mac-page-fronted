# Installation Instructions

## Required Packages

You need to install these packages for the authentication forms to work:

```bash
npm install @radix-ui/react-tabs @radix-ui/react-checkbox
```

## How to Install

### Option 1: Enable PowerShell Scripts (Recommended)
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Type `Y` and press Enter
4. Close PowerShell
5. Open VS Code terminal and run: `npm install @radix-ui/react-tabs @radix-ui/react-checkbox`

### Option 2: Use CMD Instead
1. Open Command Prompt (CMD) instead of PowerShell
2. Navigate to your project: `cd "C:\Users\Ashraful Hossain\Desktop\projects\office\january\shidcoinhunter-clone\shidcoinhunter"`
3. Run: `npm install @radix-ui/react-tabs @radix-ui/react-checkbox`

## After Installation

The errors will disappear and your authentication modal will work perfectly!

## What's Been Created

✅ SignIn Form with:
- Email validation
- Password with show/hide toggle
- Remember me checkbox
- Forgot password link
- Google sign-in button
- Sign up link (switches to signup tab)

✅ SignUp Form with:
- Full name field
- Email validation
- Password with show/hide toggle
- Confirm password (with match validation)
- Terms & conditions checkbox
- Google sign-up button
- Log in link (switches to login tab)

✅ Tab System:
- URL: `?modal=authentication&tab=login`
- URL: `?modal=authentication&tab=signup`

Both forms follow the Figma design with green theme!
