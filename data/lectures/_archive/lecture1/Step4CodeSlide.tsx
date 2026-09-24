import React from 'react';
import { SlideTitle } from '@/components/slides';

const Step4CodeSlide: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-bio-dark via-bio-darker to-black text-white">
      <div className="pb-8">
        <SlideTitle>
          Step 4: <span className="text-bio-blue">The Code</span> - Reading & Writing CSV Files
        </SlideTitle>
      </div>
      
      <div className="max-w-5xl w-full space-y-6">
        <div className="bg-gray-900 rounded-lg p-6 border border-bio-blue/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-blue">Reading data from CSV file:</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`import csv

# Read reagent data from CSV file
names = []
molecular_weights = []
masses = []

with open('reagents.csv', 'r') as file:
    csv_reader = csv.reader(file)
    next(csv_reader)  # Skip header row
    
    for row in csv_reader:
        names.append(row[0])
        molecular_weights.append(float(row[1]))
        masses.append(float(row[2]))

print(f"Loaded {len(names)} reagents from file")`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-yellow/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-yellow">Process all reagents & calculate volumes:</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`# Our function from Step 2
def calculate_volume(molecular_weight, mass_mg, concentration_mM):
    return mass_mg / (molecular_weight * concentration_mM)

# Process all reagents using indices
print("\\nStock Solution Preparation:")
print("-" * 40)

volumes = []  # Store calculated volumes

for i in range(len(names)):
    # Get data for this reagent
    name = names[i]
    mw = molecular_weights[i]
    mass = masses[i]
    
    # Calculate volume
    volume = calculate_volume(mw, mass, 10)  # 10mM
    volumes.append(volume)
    
    print(f"{name}: Add {volume:.2f} mL DMSO")`}
            </code>
          </pre>
        </div>

        <div className="bg-gray-900 rounded-lg p-6 border border-bio-green/30">
          <h3 className="text-lg font-semibold mb-3 text-bio-green">Save results to new CSV file:</h3>
          <pre className="text-sm overflow-x-auto">
            <code className="text-gray-300">
{`# Write results to CSV file
with open('stock_solutions.csv', 'w', newline='') as file:
    csv_writer = csv.writer(file)
    
    # Write header row
    csv_writer.writerow(['Reagent', 'MW', 'Mass_mg', 'Volume_mL', 'Solvent'])
    
    # Write data for each reagent
    for i in range(len(names)):
        csv_writer.writerow([
            names[i],
            molecular_weights[i],
            masses[i],
            round(volumes[i], 2),
            'DMSO'
        ])

print(f"\\n✓ Saved {len(names)} stock solutions to 'stock_solutions.csv'")`}
            </code>
          </pre>
        </div>

        <div className="mt-6 text-center">
          <p className="text-lg text-gray-300">
            <span className="text-bio-blue font-semibold">Key concepts:</span>{' '}
            <span className="text-bio-yellow font-mono">paths and file system</span>,{' '}
            <span className="text-bio-yellow font-mono">looping and appending data</span>,{' '}
            <span className="text-bio-yellow font-mono">reading and writing files</span>,{' '}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/paths_and_filesystem.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-bio-blue to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Paths & File System
          </a>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/looping_and_appending.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Looping & Appending
          </a>
          <a
            href="https://colab.research.google.com/github/HocheggerLab/y3-bio-python/blob/main/notebooks/lecture_1/reading_and_writing_files.ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-bio-green text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 7.05l-1.414 1.414L12 4.93 8.464 8.464 7.05 7.05 12 2.1l4.95 4.95zM7.05 16.95l1.414-1.414L12 19.07l3.536-3.536 1.414 1.414L12 21.9l-4.95-4.95z" fill="currentColor"/>
            </svg>
            Reading & Writing Files
          </a>
        </div>
      </div>
    </div>
  );
};

export default Step4CodeSlide;