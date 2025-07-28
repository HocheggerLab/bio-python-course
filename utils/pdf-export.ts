export async function exportSlidesToPDF(
  _lectureId: string,
  lectureTitle: string
): Promise<void> {
  // Dynamic imports to avoid SSR issues
  const { toPng } = await import('html-to-image')
  const { jsPDF } = await import('jspdf')
  
  try {
    // Get all slide elements
    const slideElements = document.querySelectorAll('.slide')
    
    console.log(`Found ${slideElements.length} slides to export`)
    
    if (slideElements.length === 0) {
      console.error('No slides found to export')
      return
    }

    // Create new PDF document with compression
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1920, 1080],
      compress: true
    })

    // Create a temporary container for rendering slides
    const tempContainer = document.createElement('div')
    tempContainer.style.position = 'fixed'
    tempContainer.style.top = '0'
    tempContainer.style.left = '0'
    tempContainer.style.width = '1920px'
    tempContainer.style.height = '1080px'
    tempContainer.style.zIndex = '99999'
    tempContainer.style.backgroundColor = '#0a0a0f'
    tempContainer.style.visibility = 'hidden'
    document.body.appendChild(tempContainer)

    for (let i = 0; i < slideElements.length; i++) {
      console.log(`Processing slide ${i + 1} of ${slideElements.length}`)
      const slideElement = slideElements[i] as HTMLElement
      
      // Clone the slide
      const clonedSlide = slideElement.cloneNode(true) as HTMLElement
      
      // Ensure the clone is visible
      clonedSlide.style.display = 'block'
      clonedSlide.style.width = '1920px'
      clonedSlide.style.height = '1080px'
      clonedSlide.style.overflow = 'hidden'
      clonedSlide.classList.add('active')
      
      // Add to temp container
      tempContainer.innerHTML = ''
      tempContainer.appendChild(clonedSlide)
      
      // Make temporarily visible for capture
      tempContainer.style.visibility = 'visible'
      
      // Wait for rendering
      await new Promise(resolve => setTimeout(resolve, 200))
      
      // Convert to image with reduced quality for smaller file size
      const dataUrl = await toPng(tempContainer, {
        quality: 0.85,
        pixelRatio: 1,
        backgroundColor: '#0a0a0f',
        width: 1920,
        height: 1080
      })

      // Hide again
      tempContainer.style.visibility = 'hidden'

      // Add page to PDF
      if (i > 0) {
        pdf.addPage()
      }

      // Add image to PDF page
      pdf.addImage(dataUrl, 'PNG', 0, 0, 1920, 1080)
    }

    // Clean up
    document.body.removeChild(tempContainer)

    console.log('All slides processed, saving PDF...')
    
    // Save the PDF with lecture title
    const fileName = `${lectureTitle.replace(/\s+/g, '-').toLowerCase()}-slides.pdf`
    
    try {
      pdf.save(fileName)
      console.log('PDF saved successfully!')
    } catch (saveError) {
      console.error('Error saving PDF:', saveError)
      throw new Error(`Failed to save PDF: ${saveError instanceof Error ? saveError.message : 'Unknown error'}`)
    }
  } catch (error) {
    console.error('Error exporting slides to PDF:', error)
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    throw error
  }
}