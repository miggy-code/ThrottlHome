import { test, expect } from "@playwright/test";

test.describe("Visual Regression Tests", () => {
  test("Home Page matches baseline setup", async ({ page }) => {
    // Navigate to homepage
    await page.goto("/");
    // Wait for the hero elements to stabilize if they aren't fully frozen by prefers-reduced-motion
    await page.waitForLoadState("networkidle");
    // Extra grace period for CSS fonts/images to finish snapping
    await page.waitForTimeout(500);

    await expect(page).toHaveScreenshot("home-page.png", { 
      fullPage: true,
      maxDiffPixelRatio: 0.05 // Allows ~5% flex for font rendering differences
    });
  });

  test("Services Page layout remains unbroken", async ({ page }) => {
    await page.goto("/services");
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(500);
    
    await expect(page).toHaveScreenshot("services-page.png", { fullPage: true });
  });
});
