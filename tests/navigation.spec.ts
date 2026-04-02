import { test, expect } from "@playwright/test";

test.describe("Functional Navigation Rules", () => {
  test("Desktop navigation works correctly", async ({ page }) => {
    await page.goto("/");
    
    // Click on Services link in header
    await page.getByRole("link", { name: "Services" }).first().click();
    
    // Check if navigated successfully
    await expect(page).toHaveURL(/.*\/services/);
    
    // Headings verification
    await expect(page.getByRole("heading", { name: /We make AI actually work/i })).toBeVisible();
  });

  test("Mobile hamburger menu opens and closes", async ({ page, isMobile }) => {
    // We only execute this on mobile browser contexts
    test.skip(!isMobile, "This test is specifically for the mobile hamburger menu");

    await page.goto("/");
    const hamburger = page.getByRole("button", { name: /open menu/i });
    
    // Ensure it's rendered visually
    await expect(hamburger).toBeVisible();
    await hamburger.click();

    // Verify modal overlay opens by checking nav link
    const mobileLink = page.getByRole("link", { name: "Services" });
    await expect(mobileLink).toBeVisible();

    mobileLink.click();
    await expect(page).toHaveURL(/.*\/services/);
  });
});
