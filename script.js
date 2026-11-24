/* ============================================================
   PRAKASH POWER STORE — COMPLETE JAVASCRIPT
   ============================================================ */

'use strict';

/* ---- PRODUCT DATABASE ---- */
const PRODUCTS = {
  1: {
    id: 1, name: 'Prakash 5 kVA Silent DG Set', series: 'PRG-5', category: 'silent',
    kva: '5 kVA', kw: '4 kW', phase: 'Single Phase (1Ø)', type: 'Silent Canopy',
    badge: '5 kVA',
    desc: 'Compact and reliable, the PRG-5 is Prakash\'s entry-level silent genset ideal for homes, small shops, and agricultural use. Features a robust single-cylinder, air-cooled diesel engine with acoustic enclosure compliant with CPCB IV+ emission and noise norms.',
    specs: {
      'Prime Rating': '5 kVA / 4 kW',
      'Standby Rating': '5.5 kVA / 4.4 kW',
      'Voltage': '230V, Single Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Air-Cooled, Compression Ignition',
      'No. of Cylinders': '1 (Single)',
      'Aspiration': 'Naturally Aspirated',
      'Cooling': 'Air-Cooled',
      'Starting': 'Electric Start (12V)',
      'Fuel Tank': '15 Liters',
      'Fuel Consumption': '~1.4 L/hr (at 75% load)',
      'Noise Level': '< 68 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Acoustic Canopy',
      'Dimensions (LxWxH)': '1050 x 600 x 820 mm',
      'Net Weight': '~185 kg',
      'Alternator': 'Brushless, Self-Excited, AVR',
      'Insulation Class': 'Class H',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '1-Phase', 'Air-Cooled', 'CPCB IV+'],
    emoji: '⚡',
    applications: ['Home', 'Small Retail Shop', 'Light Agricultural Use']
  },
  2: {
    id: 2, name: 'Prakash 10 kVA Silent DG Set', series: 'PRG-10', category: 'silent',
    kva: '10 kVA', kw: '8 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '10 kVA',
    desc: 'The PRG-10 is a mid-capacity three-phase silent generator perfectly suited for commercial offices, bank branches, and small restaurants. Water-cooled multi-cylinder engine with AMF panel compatibility.',
    specs: {
      'Prime Rating': '10 kVA / 8 kW',
      'Standby Rating': '11 kVA / 8.8 kW',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Water-Cooled, Compression Ignition',
      'No. of Cylinders': '2–3',
      'Aspiration': 'Naturally Aspirated',
      'Cooling': 'Water-Cooled (Radiator)',
      'Starting': 'Electric Start (12V Battery)',
      'Fuel Tank': '25 Liters',
      'Fuel Consumption': '~2.6 L/hr (at 75% load)',
      'Noise Level': '< 70 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Acoustic Canopy',
      'Dimensions (LxWxH)': '1300 x 680 x 980 mm',
      'Net Weight': '~285 kg',
      'Alternator': 'Brushless, Self-Excited, AVR, Class H',
      'AMF Ready': 'Yes',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Water-Cooled', 'CPCB IV+'],
    emoji: '🔋',
    applications: ['Commercial Office', 'Bank Branch', 'Small Restaurants', 'Telecom Tower']
  },
  3: {
    id: 3, name: 'Prakash 15 kVA Silent DG Set', series: 'PRG-15', category: 'silent',
    kva: '15 kVA', kw: '12 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '15 kVA',
    desc: 'The PRG-15 offers robust backup power for mid-sized commercial establishments. CPCB IV+ compliant weatherproof acoustic canopy, 3-phase output, and electric start make it a versatile choice for clinics, schools, and retail spaces.',
    specs: {
      'Prime Rating': '15 kVA / 12 kW',
      'Standby Rating': '16.5 kVA / 13.2 kW',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Water-Cooled, Compression Ignition',
      'No. of Cylinders': '3',
      'Aspiration': 'Naturally Aspirated',
      'Cooling': 'Water-Cooled (Radiator)',
      'Starting': 'Electric Start (12V Battery)',
      'Fuel Tank': '40 Liters',
      'Fuel Consumption': '~3.5 L/hr (at 75% load)',
      'Noise Level': '< 70 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Weatherproof Canopy',
      'Dimensions (LxWxH)': '1480 x 740 x 1050 mm',
      'Net Weight': '~380 kg',
      'Alternator': 'Brushless, Self-Excited, AVR, Class H',
      'AMF Ready': 'Yes',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Water-Cooled', 'CPCB IV+'],
    emoji: '⚡',
    applications: ['Retail Stores', 'Clinics', 'Educational Institutions', 'Small Hotels']
  },
  4: {
    id: 4, name: 'Prakash 25 kVA Silent DG Set', series: 'PRG-25', category: 'silent',
    kva: '25 kVA', kw: '20 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '25 kVA',
    desc: 'The PRG-25 is Prakash\'s most popular medium-capacity silent generator. Features a heavy-duty water-cooled diesel engine with microprocessor-based AMF panel and AVR for ±1% voltage regulation. Ideal for commercial complexes, construction sites, and medium hospitals.',
    specs: {
      'Prime Rating': '25 kVA / 20 kW',
      'Standby Rating': '27.5 kVA / 22 kW',
      'Power Factor': '0.8 Lagging',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Water-Cooled, Compression Ignition',
      'No. of Cylinders': '4',
      'Aspiration': 'Naturally Aspirated',
      'Cooling': 'Water-Cooled (Radiator)',
      'Starting': 'Electric Start, AMF Panel',
      'Fuel Tank': '72 Liters',
      'Fuel Consumption': '~5.5 L/hr (at 75% load)',
      'Noise Level': '< 72 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Heavy-Duty Acoustic Canopy',
      'Dimensions (LxWxH)': '1950 x 820 x 1180 mm',
      'Net Weight': '~520 kg',
      'Alternator': 'Brushless, Single-Bearing, AVR ±1%, Class H',
      'AMF/ATS Ready': 'Yes',
      'Voltage Regulation': '±1%',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Water-Cooled', 'CPCB IV+'],
    emoji: '🔌',
    applications: ['Commercial Complex', 'Construction Site', 'Marriage Halls', 'Medium Industries']
  },
  5: {
    id: 5, name: 'Prakash 40 kVA Silent DG Set', series: 'PRG-40', category: 'silent',
    kva: '40 kVA', kw: '32 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '40 kVA',
    desc: 'Heavy-duty 4-cylinder turbocharged diesel engine delivering reliable prime power. The PRG-40 features a weatherproof acoustic canopy, digital AMF panel, and is designed for demanding construction and hospital applications.',
    specs: {
      'Prime Rating': '40 kVA / 32 kW',
      'Standby Rating': '44 kVA / 35.2 kW',
      'Power Factor': '0.8 Lagging',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Turbocharged, Water-Cooled',
      'No. of Cylinders': '4',
      'Aspiration': 'Turbocharged (TC)',
      'Cooling': 'Water-Cooled (Radiator)',
      'Starting': 'Electric Start, AMF Panel',
      'Fuel Tank': '110 Liters',
      'Fuel Consumption': '~8.2 L/hr (at 75% load)',
      'Noise Level': '< 74 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Heavy-Duty Acoustic Canopy',
      'Dimensions (LxWxH)': '2200 x 900 x 1300 mm',
      'Net Weight': '~720 kg',
      'Alternator': 'Brushless, Single-Bearing, AVR ±1%, Class H',
      'AMF/ATS Ready': 'Yes',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Turbocharged', 'CPCB IV+'],
    emoji: '⚡',
    applications: ['Hospitals', 'Construction Sites', 'Hotels', 'Medium Industries']
  },
  6: {
    id: 6, name: 'Prakash 62.5 kVA Silent DG Set', series: 'PRG-62.5', category: 'silent',
    kva: '62.5 kVA', kw: '50 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '62.5 kVA',
    desc: 'The PRG-62.5 is a high-capacity industrial generator with a 6-cylinder turbocharged water-cooled diesel engine. Features microprocessor-based AMF control and 200L fuel tank for extended operation. Suitable for large hospitals and manufacturing units.',
    specs: {
      'Prime Rating': '62.5 kVA / 50 kW',
      'Standby Rating': '68.75 kVA / 55 kW',
      'Power Factor': '0.8 Lagging',
      'Voltage': '415V / 440V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Turbocharged, Water-Cooled',
      'No. of Cylinders': '6',
      'Aspiration': 'Turbocharged (TC)',
      'Cooling': 'Liquid/Water-Cooled (Radiator)',
      'Starting': 'Electric Start, 12V Heavy-Duty',
      'Fuel Tank': '200 Liters',
      'Fuel Consumption': '~13 L/hr (at 75% load)',
      'Noise Level': '< 75 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Heavy Acoustic Canopy',
      'Dimensions (LxWxH)': '2650 x 1000 x 1450 mm',
      'Net Weight': '~1050 kg',
      'Alternator': 'Brushless, Self-Excited, AVR, Class H',
      'AMF/ATS Ready': 'Yes',
      'Digital Controller': 'Microprocessor-Based',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Turbocharged', 'CPCB IV+'],
    emoji: '🏭',
    applications: ['Large Hospitals', 'Hotels', 'Manufacturing Plants', 'Corporate Offices']
  },
  7: {
    id: 7, name: 'Prakash 82.5 kVA Silent DG Set', series: 'PRG-82.5', category: 'silent',
    kva: '82.5 kVA', kw: '66 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '82.5 kVA',
    desc: 'The PRG-82.5 Heavy Duty series delivers uncompromising industrial power with a 6-cylinder turbocharged liquid-cooled engine. The heavy modular acoustic enclosure provides superior noise attenuation. Perfect for data centers, large healthcare facilities, and telecom infrastructure.',
    specs: {
      'Prime Rating': '82.5 kVA / 66 kW',
      'Standby Rating': '90 kVA / 72 kW',
      'Power Factor': '0.8 Lagging',
      'Rated Current': '~115 Amps',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Turbocharged, Liquid-Cooled',
      'No. of Cylinders': '6',
      'Aspiration': 'Turbocharged (TC)',
      'Cooling': 'Liquid/Water-Cooled (Radiator)',
      'Governor': 'Mechanical / Electronic',
      'Starting': 'Electric Start, Heavy-Duty 12V',
      'Fuel Tank': '270 Liters',
      'Fuel Consumption': '~16.5 L/hr (at 75% load)',
      'Noise Level': '< 75 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Modular Acoustic Canopy',
      'Dimensions (LxWxH)': '3210 x 1250 x 1500 mm',
      'Net Weight': '~1350 kg',
      'Alternator': 'Brushless, Single-Bearing, AVR ±1%, Class H',
      'AMF/ATS Ready': 'Yes',
      'Microprocessor AMF': 'Included',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Turbocharged', 'CPCB IV+'],
    emoji: '🔧',
    applications: ['Data Centers', 'Telecom Towers', 'Large Hospitals', 'Industrial Plants']
  },
  8: {
    id: 8, name: 'Prakash 125 kVA Silent DG Set', series: 'PRG-125', category: 'silent',
    kva: '125 kVA', kw: '100 kW', phase: 'Three Phase (3Ø)', type: 'Silent Canopy',
    badge: '125 kVA',
    desc: 'The PRG-125 is Prakash\'s flagship heavy-duty industrial generator. A powerful 6-cylinder turbocharged and intercooled engine with 400L fuel tank capacity provides extended runtime for critical applications. ATS-ready for seamless automatic transfer.',
    specs: {
      'Prime Rating': '125 kVA / 100 kW',
      'Standby Rating': '138 kVA / 110 kW',
      'Power Factor': '0.8 Lagging',
      'Voltage': '415V / 440V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Turbocharged + Intercooled',
      'No. of Cylinders': '6',
      'Aspiration': 'Turbocharged + Intercooled (TCIC)',
      'Cooling': 'Liquid-Cooled (Heavy Radiator)',
      'Governor': 'Electronic (EGS)',
      'Starting': 'Electric Start, Heavy-Duty 24V',
      'Fuel Tank': '400 Liters',
      'Fuel Consumption': '~24 L/hr (at 75% load)',
      'Noise Level': '< 75 dB(A) at 1m',
      'Enclosure': 'CPCB IV+ Heavy Modular Acoustic Canopy',
      'Dimensions (LxWxH)': '3750 x 1300 x 1710 mm',
      'Net Weight': '~2100 kg',
      'Alternator': 'Brushless, Single-Bearing, AVR ±1%, Class H',
      'AMF/ATS Ready': 'Yes (ATS-Compatible)',
      'Control Panel': 'Microprocessor-Based Digital AMF',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Turbo+IC', 'CPCB IV+'],
    emoji: '🏗️',
    applications: ['Large Industries', 'Hospitals', 'Airports', 'Large Commercial Complexes']
  },
  9: {
    id: 9, name: 'Prakash 25 kVA Open Frame DG Set', series: 'PRO-25', category: 'open',
    kva: '25 kVA', kw: '20 kW', phase: 'Three Phase (3Ø)', type: 'Open Skid Frame',
    badge: '25 kVA',
    desc: 'The PRO-25 Open Frame genset offers the same reliable Prakash engine in a budget-friendly open skid configuration. Ideal for construction sites where noise is not a constraint and portability and ease of maintenance are priorities.',
    specs: {
      'Prime Rating': '25 kVA / 20 kW',
      'Power Factor': '0.8 Lagging',
      'Voltage': '415V, Three Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Water-Cooled',
      'No. of Cylinders': '4',
      'Starting': 'Manual / Electric Start',
      'Fuel Tank': '45 Liters (Base)',
      'Fuel Consumption': '~5.5 L/hr (at 75% load)',
      'Frame Type': 'Heavy Duty Welded Steel Skid',
      'Alternator': 'Brushless, Self-Excited, AVR',
      'Insulation Class': 'Class H',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '3-Phase', 'Water-Cooled', 'CPCB IV+'],
    emoji: '🔩',
    applications: ['Construction Sites', 'Agricultural Fields', 'Workshops', 'Temporary Sites']
  },
  10: {
    id: 10, name: 'Prakash 5 kVA Portable Genset', series: 'PRS-5', category: 'portable',
    kva: '5 kVA', kw: '4 kW', phase: 'Single Phase (1Ø)', type: 'Portable / Wheeled',
    badge: '5 kVA',
    desc: 'The PRS-5 is a compact, wheeled portable diesel genset designed for maximum convenience. Easy to transport, it comes with built-in wheels and handle. Features multiple AC outlets and electric start for quick deployment.',
    specs: {
      'Prime Rating': '5 kVA / 4 kW',
      'Voltage': '230V, Single Phase',
      'Frequency': '50 Hz',
      'Engine Type': '4-Stroke, Air-Cooled, Single Cylinder',
      'Starting': 'Electric Start + Recoil Backup',
      'Fuel Tank': '15 Liters',
      'Fuel Consumption': '~1.4 L/hr (at 75% load)',
      'AC Outlets': '2× 230V 15A + 1× 5-pin 3-Phase',
      'Transport': 'Built-In Wheels + Handle',
      'Net Weight': '~115 kg',
      'CPCB Compliance': 'CPCB IV+'
    },
    tags: ['1500 RPM', '1-Phase', 'Air-Cooled', 'CPCB IV+'],
    emoji: '🚐',
    applications: ['Homes', 'Events', 'Agricultural Fields', 'Remote Sites']
  },
  11: {
    id: 11, name: 'Prakash MB-3 Diesel Pumpset', series: 'MB-3', category: 'pumpset',
    kva: '5 BHP', kw: '3.7 kW', phase: 'N/A', type: 'Mono Diesel Pumpset',
    badge: '5 BHP',
    desc: 'The Prakash MB-3 Mono Diesel Pumpset is a workhorse for agricultural irrigation. Directly driven by Prakash\'s proven diesel engine, it delivers reliable water discharge for farms, paddy fields, and general agricultural water transfer applications.',
    specs: {
      'Engine Power': '5 BHP / 3.7 kW',
      'Bore x Stroke': '85 mm x 82 mm',
      'Engine Type': '4-Stroke, Air-Cooled, Single Cylinder',
      'Starting': 'Handle/Crank Start (Electric Optional)',
      'Speed': '1500 RPM',
      'Suction Size': '85 mm',
      'Delivery Size': '56 mm',
      'Total Head': '11 Meters',
      'Discharge': '15 LPS (Liters per Second)',
      'Pump Type': 'Centrifugal Mono Block',
      'Combustion': 'Direct Injection, Multi-Hole Nozzle',
      'Fuel': 'High-Speed Diesel'
    },
    tags: ['1500 RPM', '5 BHP', 'Air-Cooled', '1 Cylinder'],
    emoji: '💧',
    applications: ['Paddy Fields', 'Vegetable Farms', 'Garden Irrigation', 'Water Transfer']
  },
  12: {
    id: 12, name: 'Automatic Transfer Switch (ATS) Panel', series: 'ATS-63A', category: 'ats',
    kva: 'N/A', kw: 'N/A', phase: 'Three Phase (3Ø)', type: 'ATS / AMF Control Panel',
    badge: 'ATS Panel',
    desc: 'Prakash Power Store supplies CPCB-compatible Automatic Transfer Switches and AMF Control Panels for seamless changeover between grid and generator power. Available from 63A to 1600A for single-phase and three-phase systems. LCD-based digital controller with full protection suite.',
    specs: {
      'Type': 'Automatic Transfer Switch (ATS) + AMF',
      'Rating': '63A to 1600A (Customizable)',
      'Phase': 'Three Phase (3Ø), 415V, 50Hz',
      'Enclosure': 'IP54 Powder-Coated Sheet Metal',
      'Controller': 'LCD Digital AMF Controller',
      'Transfer Time': '< 10 seconds (Configurable)',
      'Protections': 'Over-Voltage, Under-Voltage, Reverse Phase, Overload, Short Circuit',
      'Generator Control': 'Auto Start / Auto Stop',
      'Grid Monitoring': 'Continuous 3-Phase Monitoring',
      'Indicators': 'Grid LED, Gen LED, Fault LED, Digital Display',
      'Battery Charger': 'Included (12V/24V)',
      'Standard': 'IS/IEC 60947-6-1 Compliant'
    },
    tags: ['3-Phase', '63A–1600A', 'AMF Ready', 'Digital'],
    emoji: '⚙️',
    applications: ['Industrial Plants', 'Hospitals', 'Commercial Buildings', 'Data Centers']
  }
};

/* ---- APPLIANCES DATA ---- */
const APPLIANCES = [
  { name: 'Air Conditioner (1.5T)', watts: 1800, icon: '❄️', category: 'hvac' },
  { name: 'Air Conditioner (2T)', watts: 2400, icon: '❄️', category: 'hvac' },
  { name: 'Ceiling Fan', watts: 75, icon: '🌀', category: 'general' },
  { name: 'LED Tube Light', watts: 20, icon: '💡', category: 'lighting' },
  { name: 'Refrigerator (350L)', watts: 300, icon: '🧊', category: 'appliance' },
  { name: 'Computer / Desktop', watts: 300, icon: '💻', category: 'it' },
  { name: 'Printer / Copier', watts: 500, icon: '🖨️', category: 'it' },
  { name: 'Electric Motor (1HP)', watts: 850, icon: '⚙️', category: 'industrial' },
  { name: 'Electric Motor (3HP)', watts: 2500, icon: '⚙️', category: 'industrial' },
  { name: 'Electric Motor (5HP)', watts: 4000, icon: '⚙️', category: 'industrial' },
  { name: 'Water Pump (0.5HP)', watts: 450, icon: '💧', category: 'pump' },
  { name: 'Water Pump (1HP)', watts: 900, icon: '💧', category: 'pump' },
  { name: 'Electric Oven / Heater', watts: 1500, icon: '🔥', category: 'appliance' },
  { name: 'Welding Machine', watts: 5000, icon: '🔧', category: 'industrial' },
  { name: 'CNC Machine', watts: 7500, icon: '🏭', category: 'industrial' },
  { name: 'Server Rack (1U)', watts: 500, icon: '🖥️', category: 'it' },
  { name: 'Medical Equipment', watts: 2000, icon: '🏥', category: 'medical' },
  { name: 'Elevator / Lift (4-6 floors)', watts: 7500, icon: '🛗', category: 'hvac' },
];

/* ---- GENERATOR RECOMMENDATION MAP ---- */
function getRecommendedGenerator(kvaNeeded) {
  if (kvaNeeded <= 0) return null;
  if (kvaNeeded <= 5) return { model: 'PRG-5 Silent DG Set', kva: '5 kVA', specs: '5 kVA | Single Phase | Air-Cooled | CPCB IV+' };
  if (kvaNeeded <= 10) return { model: 'PRG-10 Silent DG Set', kva: '10 kVA', specs: '10 kVA | Three Phase | Water-Cooled | CPCB IV+' };
  if (kvaNeeded <= 15) return { model: 'PRG-15 Silent DG Set', kva: '15 kVA', specs: '15 kVA | Three Phase | Water-Cooled | CPCB IV+' };
  if (kvaNeeded <= 25) return { model: 'PRG-25 Silent DG Set', kva: '25 kVA', specs: '25 kVA | Three Phase | Water-Cooled | AMF Panel | CPCB IV+' };
  if (kvaNeeded <= 40) return { model: 'PRG-40 Silent DG Set', kva: '40 kVA', specs: '40 kVA | Three Phase | Turbocharged | 4-Cylinder | CPCB IV+' };
  if (kvaNeeded <= 62.5) return { model: 'PRG-62.5 Silent DG Set', kva: '62.5 kVA', specs: '62.5 kVA | Three Phase | Turbocharged | 6-Cylinder | CPCB IV+' };
  if (kvaNeeded <= 82.5) return { model: 'PRG-82.5 Heavy Duty DG Set', kva: '82.5 kVA', specs: '82.5 kVA | Three Phase | Turbo | Microprocessor AMF | CPCB IV+' };
  if (kvaNeeded <= 125) return { model: 'PRG-125 Heavy Duty DG Set', kva: '125 kVA', specs: '125 kVA | Three Phase | Turbo+Intercooled | 6-Cyl | ATS-Ready | CPCB IV+' };
  return { model: 'PRG-125+ Industrial Custom Solution', kva: '125+ kVA', specs: 'Custom sizing available. Contact our engineers for site assessment.' };
}

/* ============================================================
   STATE
============================================================ */
let compareList = [];
let currentFilterKva = 'all';
let currentFilterPhase = 'all';
let currentFilterEnclosure = 'all';
let currentFilterApplication = 'all';
let applianceQuantities = {};
let currentQuoteModel = '';
let currentCalcRec = null;

/* ============================================================
   DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFilterChips();
  initCalculator();
  initSearchBar();
  initScrollAnimations();
  initMegaMenuLinks();
  console.log('%c⚡ Prakash Power Store', 'color: #F59E0B; font-size: 18px; font-weight: bold;');
  console.log('%cFull-stack e-commerce website for Prakash Generators', 'color: #94A3B8;');
});

/* ============================================================
   HEADER SCROLL EFFECT
============================================================ */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ============================================================
   MOBILE MENU
============================================================ */
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const hamburger = document.getElementById('hamburger');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  hamburger.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function toggleAccordion(label) {
  const sub = label.nextElementSibling;
  const wasOpen = sub.classList.contains('open');
  document.querySelectorAll('.mobile-menu__sub').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.mobile-menu__group-label').forEach(l => l.classList.remove('active'));
  if (!wasOpen) {
    sub.classList.add('open');
    label.classList.add('active');
  }
}

/* ============================================================
   FILTER CHIPS — FILTER BAR
============================================================ */
function initFilterChips() {
  document.querySelectorAll('.filter-chips').forEach(group => {
    group.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        group.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const filterGroup = group.dataset.filterGroup;
        const value = chip.dataset.value;
        if (filterGroup === 'kva') currentFilterKva = value;
        if (filterGroup === 'phase') currentFilterPhase = value;
        if (filterGroup === 'enclosure') currentFilterEnclosure = value;
        if (filterGroup === 'application') currentFilterApplication = value;
      });
    });
  });
}

function applyFilters() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  setTimeout(() => filterProducts(), 400);
}

/* ============================================================
   PRODUCT FILTERING
============================================================ */
function filterProducts() {
  const cards = document.querySelectorAll('.product-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const cardKva = card.dataset.kva;
    const cardPhase = card.dataset.phase;
    const cardEnclosure = card.dataset.enclosure;
    const cardApp = card.dataset.application || '';

    const kvaMatch = currentFilterKva === 'all' || cardKva === currentFilterKva;
    const phaseMatch = currentFilterPhase === 'all' || cardPhase === currentFilterPhase;
    const enclosureMatch = currentFilterEnclosure === 'all' || cardEnclosure === currentFilterEnclosure;
    const appMatch = currentFilterApplication === 'all' || cardApp.includes(currentFilterApplication);

    const show = kvaMatch && phaseMatch && enclosureMatch && appMatch;
    card.classList.toggle('hidden', !show);
    if (show) visibleCount++;
  });

  showToast(`Showing ${visibleCount} product${visibleCount !== 1 ? 's' : ''} matching your filters`);
}

function filterCategory(btn, category) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const cardCat = card.dataset.category;
    card.classList.toggle('hidden', category !== 'all' && cardCat !== category);
  });
}

function filterByIndustry(industry) {
  currentFilterApplication = industry;
  document.querySelectorAll('[data-filter-group="application"] .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.value === industry);
  });
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => filterProducts(), 500);
}

/* ============================================================
   MEGA MENU DATA-FILTER LINKS
============================================================ */
function initMegaMenuLinks() {
  document.querySelectorAll('[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
      currentFilterKva = filter;
      document.querySelectorAll('[data-filter-group="kva"] .chip').forEach(c => {
        c.classList.toggle('active', c.dataset.value === filter);
      });
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => filterProducts(), 500);
    });
  });
}

/* ============================================================
   SEARCH BAR
============================================================ */
function initSearchBar() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;
  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      const query = searchInput.value.toLowerCase().trim();
      if (!query) {
        document.querySelectorAll('.product-card').forEach(c => c.classList.remove('hidden'));
        return;
      }
      const cards = document.querySelectorAll('.product-card');
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.classList.toggle('hidden', !text.includes(query));
      });
    }, 250);
  });
}

/* ============================================================
   PRODUCT DETAIL MODAL
============================================================ */
function openProductModal(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  const specsHTML = Object.entries(p.specs).map(([key, val]) =>
    `<tr><td>${key}</td><td>${val}</td></tr>`
  ).join('');

  const tagsHTML = p.tags.map(t => `<span class="spec-pill">${t}</span>`).join('');

  const applicationsHTML = p.applications.map(a =>
    `<div style="display:flex;align-items:center;gap:6px;font-size:13px;color:var(--slate-600);">
      <span style="color:var(--amber-dark);">✓</span> ${a}
    </div>`
  ).join('');

  document.getElementById('productModalContent').innerHTML = `
    <div class="product-modal-gallery">
      <div class="product-modal-gallery__main">
        <div style="text-align:center;">
          <div style="font-size:80px;margin-bottom:12px;">${p.emoji}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:20px;font-weight:700;color:var(--amber);">${p.kva}</div>
          <div style="font-size:13px;color:var(--slate-500);margin-top:4px;">${p.type}</div>
        </div>
      </div>
      <div class="product-modal-gallery__thumbs">
        <div class="product-modal-gallery__thumb active" title="Front View">🏭</div>
        <div class="product-modal-gallery__thumb" title="Control Panel">⚙️</div>
        <div class="product-modal-gallery__thumb" title="Engine View">🔧</div>
        <div class="product-modal-gallery__thumb" title="Canopy Detail">📋</div>
      </div>
      <div style="background:var(--amber);border-radius:var(--radius);padding:14px;text-align:center;margin-top:auto;">
        <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#111;margin-bottom:4px;">Applications</div>
        <div style="display:flex;flex-direction:column;gap:4px;">${applicationsHTML}</div>
      </div>
    </div>
    <div class="product-modal-info">
      <div class="product-modal-badge">${p.series} • ${p.type}</div>
      <div class="product-modal-name">${p.name}</div>
      <div class="product-modal-spec-pills">${tagsHTML}</div>
      <p class="product-modal-desc">${p.desc}</p>
      <table class="product-spec-table">
        <tbody>${specsHTML}</tbody>
      </table>
      <div class="product-modal-warranty">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
        <span><strong>OEM Warranty Included</strong> — Genuine Prakash manufacturer warranty with Pan-India service network. Genuine spare parts availability guaranteed.</span>
      </div>
      <button class="btn-modal-quote" onclick="closeModal('productModal'); openQuoteModal('${p.name}')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Request Best Price for This Model
      </button>
      <button class="btn-modal-brochure" onclick="showToast('Brochure download request sent! Our team will email you shortly.')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        Download Technical Brochure (PDF)
      </button>
    </div>
  `;

  // Thumb click handlers
  setTimeout(() => {
    document.querySelectorAll('.product-modal-gallery__thumb').forEach(thumb => {
      thumb.addEventListener('click', function() {
        document.querySelectorAll('.product-modal-gallery__thumb').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }, 100);

  openModal('productModal');
}

/* ============================================================
   QUOTE MODAL
============================================================ */
function openQuoteModal(model = '') {
  const modelInput = document.getElementById('quoteModel');
  if (modelInput && model) modelInput.value = model;
  currentQuoteModel = model;
  openModal('quoteModal');
}

function submitQuote(e) {
  e.preventDefault();
  const name = document.getElementById('quoteName').value;
  const phone = document.getElementById('quotePhone').value;
  if (!name || !phone) return;
  closeModal('quoteModal');
  showToast(`✅ Quote request submitted! We'll call ${name} within 2 hours.`);
  document.getElementById('quoteForm').reset();
}

/* ============================================================
   MODAL HELPERS
============================================================ */
function openModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const overlay = document.getElementById(id);
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

/* ============================================================
   COMPARE DRAWER
============================================================ */
function toggleCompare(checkbox) {
  const id = parseInt(checkbox.dataset.id);
  const name = checkbox.dataset.name;

  if (checkbox.checked) {
    if (compareList.length >= 3) {
      checkbox.checked = false;
      showToast('You can compare up to 3 products at a time.');
      return;
    }
    if (!compareList.find(p => p.id === id)) {
      compareList.push({ id, name });
    }
  } else {
    compareList = compareList.filter(p => p.id !== id);
  }

  updateCompareUI();
}

function updateCompareUI() {
  const count = compareList.length;
  document.getElementById('compareCount').textContent = count;
  document.getElementById('compareCountDrawer').textContent = count;

  const productsEl = document.getElementById('compareProducts');
  productsEl.innerHTML = compareList.map(p =>
    `<div class="compare-product-chip">
      <span>${p.name}</span>
      <button onclick="removeFromCompare(${p.id})" style="color:var(--slate-500);font-size:14px;margin-left:4px;">✕</button>
    </div>`
  ).join('');

  const drawer = document.getElementById('compareDrawer');
  drawer.classList.toggle('open', count > 0);
}

function removeFromCompare(id) {
  compareList = compareList.filter(p => p.id !== id);
  const checkbox = document.querySelector(`.compare-checkbox[data-id="${id}"]`);
  if (checkbox) checkbox.checked = false;
  updateCompareUI();
}

function openCompare() {
  if (compareList.length === 0) {
    showToast('Select products to compare using the Compare checkboxes.');
    return;
  }
  openCompareView();
}

function openCompareView() {
  if (compareList.length < 2) {
    showToast('Please select at least 2 products to compare.');
    return;
  }

  const products = compareList.map(p => PRODUCTS[p.id]).filter(Boolean);
  const allKeys = [...new Set(products.flatMap(p => Object.keys(p.specs)))];

  const colsHTML = products.map(p =>
    `<th style="padding:12px 16px;text-align:left;background:var(--slate-50);font-size:13px;font-weight:700;color:var(--charcoal);border-bottom:2px solid var(--amber);">
      <div style="font-size:11px;color:var(--slate-500);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;">${p.series}</div>
      ${p.name}
      <div style="font-family:'JetBrains Mono',monospace;font-size:16px;font-weight:700;color:var(--amber);margin-top:4px;">${p.kva}</div>
    </th>`
  ).join('');

  const rowsHTML = allKeys.map(key => {
    const cells = products.map(p =>
      `<td style="padding:10px 16px;font-size:13px;font-family:'JetBrains Mono',monospace;color:var(--slate-700);border-bottom:1px solid var(--slate-100);">
        ${p.specs[key] || '—'}
      </td>`
    ).join('');
    return `<tr>
      <td style="padding:10px 16px;font-size:12.5px;font-weight:600;color:var(--slate-500);background:var(--slate-50);border-bottom:1px solid var(--slate-100);white-space:nowrap;">${key}</td>
      ${cells}
    </tr>`;
  }).join('');

  const quoteButtons = products.map(p =>
    `<td style="padding:12px 16px;">
      <button onclick="closeModal('quoteModal');openQuoteModal('${p.name}')" 
        style="width:100%;padding:9px;background:var(--amber);color:#111;font-weight:700;font-size:13px;border-radius:6px;cursor:pointer;border:none;transition:all 0.2s;">
        Get Quote
      </button>
    </td>`
  ).join('');

  document.getElementById('productModalContent').innerHTML = `
    <div style="padding:28px;width:100%;overflow-x:auto;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;">
        <h2 style="font-family:'Plus Jakarta Sans',sans-serif;font-size:22px;font-weight:800;color:var(--charcoal);">
          Side-by-Side Comparison
        </h2>
        <div style="font-size:13px;color:var(--slate-500);">Comparing ${products.length} products</div>
      </div>
      <table style="width:100%;border-collapse:collapse;min-width:600px;">
        <thead>
          <tr>
            <th style="padding:12px 16px;text-align:left;background:var(--charcoal);color:var(--amber);font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;border-bottom:2px solid var(--amber);">Specification</th>
            ${colsHTML}
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
          <tr>
            <td style="padding:12px 16px;font-weight:700;color:var(--slate-800);background:var(--slate-50);">Get Quote</td>
            ${quoteButtons}
          </tr>
        </tbody>
      </table>
    </div>
  `;

  openModal('productModal');
  closeCompare();
}

function clearCompare() {
  compareList = [];
  document.querySelectorAll('.compare-checkbox').forEach(cb => cb.checked = false);
  updateCompareUI();
}

function closeCompare() {
  document.getElementById('compareDrawer').classList.remove('open');
}

/* ============================================================
   kVA CALCULATOR
============================================================ */
function initCalculator() {
  const grid = document.getElementById('applianceGrid');
  if (!grid) return;

  APPLIANCES.forEach((appliance, index) => {
    applianceQuantities[index] = 0;
    const item = document.createElement('div');
    item.className = 'appliance-item';
    item.dataset.index = index;
    item.innerHTML = `
      <span class="appliance-icon">${appliance.icon}</span>
      <div class="appliance-info">
        <div class="appliance-name">${appliance.name}</div>
        <div class="appliance-watts">${appliance.watts}W per unit</div>
      </div>
      <div class="appliance-qty-wrap">
        <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
        <span class="qty-num" id="qty-${index}">0</span>
        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
      </div>
    `;
    grid.appendChild(item);
  });

  updateCalculatorResult();
}

function changeQty(index, delta) {
  applianceQuantities[index] = Math.max(0, (applianceQuantities[index] || 0) + delta);
  const qtyEl = document.getElementById(`qty-${index}`);
  if (qtyEl) qtyEl.textContent = applianceQuantities[index];

  const item = document.querySelector(`.appliance-item[data-index="${index}"]`);
  if (item) item.classList.toggle('selected', applianceQuantities[index] > 0);

  updateCalculatorResult();
}

function addCustomLoad() {
  const name = document.getElementById('customName').value.trim();
  const watts = parseInt(document.getElementById('customWatts').value);
  const qty = parseInt(document.getElementById('customQty').value) || 1;

  if (!name || !watts || watts < 1) {
    showToast('Please enter appliance name and wattage.');
    return;
  }

  const index = APPLIANCES.length;
  APPLIANCES.push({ name, watts, icon: '🔌', category: 'custom' });
  applianceQuantities[index] = qty;

  const grid = document.getElementById('applianceGrid');
  const item = document.createElement('div');
  item.className = 'appliance-item selected';
  item.dataset.index = index;
  item.innerHTML = `
    <span class="appliance-icon">🔌</span>
    <div class="appliance-info">
      <div class="appliance-name">${name}</div>
      <div class="appliance-watts">${watts}W per unit</div>
    </div>
    <div class="appliance-qty-wrap">
      <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
      <span class="qty-num" id="qty-${index}">${qty}</span>
      <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
    </div>
  `;
  grid.appendChild(item);

  document.getElementById('customName').value = '';
  document.getElementById('customWatts').value = '';
  document.getElementById('customQty').value = '1';

  updateCalculatorResult();
  showToast(`"${name}" added to load calculation.`);
}

function updateCalculatorResult() {
  let totalWatts = 0;
  APPLIANCES.forEach((appliance, index) => {
    totalWatts += appliance.watts * (applianceQuantities[index] || 0);
  });

  const buffer = Math.round(totalWatts * 0.2);
  const totalWithBuffer = totalWatts + buffer;
  const kva = totalWithBuffer / 800; // pf 0.8

  document.getElementById('totalWatts').textContent = totalWatts.toLocaleString();
  document.getElementById('totalKva').textContent = (totalWatts / 800).toFixed(1);
  document.getElementById('baseLoad').textContent = totalWatts.toLocaleString() + ' W';
  document.getElementById('safetyBuffer').textContent = buffer.toLocaleString() + ' W';
  document.getElementById('recommendedKva').textContent = kva.toFixed(1) + ' kVA';

  const rec = getRecommendedGenerator(kva);
  currentCalcRec = rec;

  const recModel = document.getElementById('recModel');
  const recSpecs = document.getElementById('recSpecs');
  const quoteBtn = document.getElementById('calcQuoteBtn');

  if (rec && totalWatts > 0) {
    recModel.textContent = rec.model;
    recSpecs.textContent = rec.specs;
    if (quoteBtn) quoteBtn.style.display = 'flex';
  } else {
    recModel.textContent = '— Add appliances above —';
    recSpecs.textContent = '';
    if (quoteBtn) quoteBtn.style.display = 'none';
  }
}

function openCalculatorQuote() {
  if (currentCalcRec) {
    openQuoteModal(currentCalcRec.model);
  }
}

function resetCalculator() {
  APPLIANCES.forEach((_, i) => { applianceQuantities[i] = 0; });
  document.querySelectorAll('.qty-num').forEach(el => el.textContent = '0');
  document.querySelectorAll('.appliance-item').forEach(el => el.classList.remove('selected'));
  updateCalculatorResult();
  showToast('Calculator reset.');
}

/* ============================================================
   FOOTER CALLBACK
============================================================ */
function submitCallback() {
  const name = document.getElementById('callbackName').value.trim();
  const phone = document.getElementById('callbackPhone').value.trim();
  if (!name || !phone) {
    showToast('Please enter your name and phone number.');
    return;
  }
  document.getElementById('callbackName').value = '';
  document.getElementById('callbackPhone').value = '';
  showToast(`✅ Callback scheduled for ${name}! We'll call within 30 minutes.`);
}

/* ============================================================
   TOAST NOTIFICATION
============================================================ */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;
  msgEl.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ============================================================
   SCROLL ANIMATIONS (Lightweight AOS alternative)
============================================================ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

  // Staggered product card reveal on scroll
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        }, i * 60);
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.product-card').forEach(card => {
    card.style.animationPlayState = 'paused';
    card.style.opacity = '0';
    cardObserver.observe(card);
  });
}

/* ============================================================
   SMOOTH NUMBER COUNTER ANIMATION (Stats)
============================================================ */
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const isDecimal = target % 1 !== 0;

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = eased * target;
    el.textContent = isDecimal ? value.toFixed(1) : Math.round(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      nums.forEach(num => {
        const text = num.textContent.trim();
        const numericMatch = text.match(/[\d.]+/);
        if (numericMatch) {
          const target = parseFloat(numericMatch[0]);
          const prefix = text.replace(/[\d.,]+.*/, '');
          const suffix = text.replace(/.*[\d.]+/, '');
          num.textContent = prefix + '0' + suffix;
          setTimeout(() => {
            const startAnim = performance.now();
            function step(now) {
              const elapsed = now - startAnim;
              const progress = Math.min(elapsed / 1200, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = eased * target;
              num.textContent = prefix + (target % 1 !== 0 ? val.toFixed(1) : Math.round(val).toLocaleString()) + suffix;
              if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
          }, 200);
        }
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', () => {
  const statsStrip = document.querySelector('.stats-strip');
  if (statsStrip) statsObserver.observe(statsStrip);
});
