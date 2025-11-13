from playwright.sync_api import sync_playwright, Page, expect

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Navigate to a page that uses the Kambaz layout to ensure the sidebar is rendered.
        page.goto("http://localhost:3000/Dashboard")
        # Wait for the page to be fully loaded and network to be idle.
        page.wait_for_load_state("networkidle")
        # Expect the navigation bar to be visible before taking a screenshot.
        navigation_bar = page.locator("#wd-kambaz-navigation")
        expect(navigation_bar).to_be_visible()
        # Take a screenshot of the entire page.
        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

if __name__ == "__main__":
    main()