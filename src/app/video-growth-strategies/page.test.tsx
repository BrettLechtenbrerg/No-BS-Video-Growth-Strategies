import { render, screen } from "@testing-library/react"
import VideoGrowthStrategiesPage from "./page"

describe("VideoGrowthStrategiesPage", () => {
  it("should render the landing page", () => {
    render(<VideoGrowthStrategiesPage />)
    
    // Check main heading is present
    expect(screen.getByText("Video Growth Strategies Landing Page")).toBeInTheDocument()
    
    // Check placeholder sections are present
    expect(screen.getByText("Hero Section (Task 2)")).toBeInTheDocument()
    expect(screen.getByText("Video Types Section (Task 3)")).toBeInTheDocument()
    expect(screen.getByText("Metrics & ROI Section (Task 4)")).toBeInTheDocument()
    expect(screen.getByText("Equipment & Pitfalls Section (Task 5)")).toBeInTheDocument()
    expect(screen.getByText("30-Day Quickstart Section (Task 6)")).toBeInTheDocument()
  })

  it("should have mobile-first responsive classes", () => {
    const { container } = render(<VideoGrowthStrategiesPage />)
    
    // Check for responsive container
    const mainContainer = container.querySelector(".mx-auto.max-w-7xl")
    expect(mainContainer).toHaveClass("px-ds-2", "sm:px-ds-3", "lg:px-ds-4")
    
    // Check for responsive spacing on hero section
    const heroSection = container.querySelector("section")
    expect(heroSection).toHaveClass("pb-ds-4", "pt-ds-3", "sm:pb-ds-5", "sm:pt-ds-4")
  })
})