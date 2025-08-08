// Data derived from Nexans N-manual Ed. 4
const cableData = {
    // Iz values from pages 37-49, ΔU values as well
    // Using "lucht" for "in open lucht" and "grond" for "in de grond"
    "XGB": { // ALSECURE® XGB Cca -> XLPE insulation
        "type": "xlpe",
        "sections": [
            { "size": 1.5, "iz_lucht": 26, "iz_grond": 30, "delta_u": 25.00 },
            { "size": 2.5, "iz_lucht": 36, "iz_grond": 50, "delta_u": 15.40 },
            { "size": 4, "iz_lucht": 49, "iz_grond": 50, "delta_u": 9.70 },
            { "size": 6, "iz_lucht": 63, "iz_grond": 65, "delta_u": 6.50 },
            { "size": 10, "iz_lucht": 86, "iz_grond": 90, "delta_u": 4.00 },
            { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.20 },
            { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.50 },
            { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.11 },
            { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.85 },
            { "size": 70, "iz_lucht": 246, "iz_grond": 265, "delta_u": 0.63 },
            { "size": 95, "iz_lucht": 299, "iz_grond": 315, "delta_u": 0.48 },
            { "size": 120, "iz_lucht": 346, "iz_grond": 360, "delta_u": 0.40 },
            { "size": 150, "iz_lucht": 399, "iz_grond": 405, "delta_u": 0.35 },
            { "size": 185, "iz_lucht": 456, "iz_grond": 460, "delta_u": 0.31 },
            { "size": 240, "iz_lucht": 538, "iz_grond": 530, "delta_u": 0.26 },
            { "size": 300, "iz_lucht": 620, "iz_grond": 600, "delta_u": 0.21 }
        ]
    },
    "XVB": { // XVB Cca -> XLPE insulation
        "type": "xlpe",
        "sections": [
            { "size": 1.5, "iz_lucht": 23, "iz_grond": 30, "delta_u": 21.60 },
            { "size": 2.5, "iz_lucht": 32, "iz_grond": 40, "delta_u": 13.30 },
            { "size": 4, "iz_lucht": 42, "iz_grond": 50, "delta_u": 8.40 },
            { "size": 6, "iz_lucht": 54, "iz_grond": 65, "delta_u": 5.70 },
            { "size": 10, "iz_lucht": 75, "iz_grond": 90, "delta_u": 3.40 },
            { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.20 },
            { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.50 },
            { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.11 },
            { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.85 },
            { "size": 70, "iz_lucht": 246, "iz_grond": 265, "delta_u": 0.63 },
            { "size": 95, "iz_lucht": 299, "iz_grond": 315, "delta_u": 0.48 },
            { "size": 120, "iz_lucht": 346, "iz_grond": 360, "delta_u": 0.40 },
            { "size": 150, "iz_lucht": 399, "iz_grond": 405, "delta_u": 0.35 },
            { "size": 185, "iz_lucht": 456, "iz_grond": 460, "delta_u": 0.31 },
            { "size": 240, "iz_lucht": 538, "iz_grond": 530, "delta_u": 0.26 }
        ]
    },
    "EXVB": { // EXVB Eca -> PVC insulation
        "type": "pvc",
        "sections": [
            { "size": 1.5, "iz_lucht": 23, "iz_grond": 30, "delta_u": 21.50 },
            { "size": 2.5, "iz_lucht": 32, "iz_grond": 40, "delta_u": 13.20 },
            { "size": 4, "iz_lucht": 42, "iz_grond": 50, "delta_u": 8.25 },
            { "size": 6, "iz_lucht": 54, "iz_grond": 65, "delta_u": 5.55 },
            { "size": 10, "iz_lucht": 75, "iz_grond": 90, "delta_u": 3.30 },
            { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.12 },
            { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.37 },
            { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.01 },
            { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.77 },
            { "size": 70, "iz_lucht": 246, "iz_grond": 250, "delta_u": 0.56 },
            { "size": 95, "iz_lucht": 299, "iz_grond": 305, "delta_u": 0.43 },
            { "size": 120, "iz_lucht": 346, "iz_grond": 345, "delta_u": 0.36 },
            { "size": 150, "iz_lucht": 399, "iz_grond": 390, "delta_u": 0.31 },
            { "size": 185, "iz_lucht": 456, "iz_grond": 440, "delta_u": 0.27 },
            { "size": 240, "iz_lucht": 538, "iz_grond": 510, "delta_u": 0.23 }
        ]
    }
};

// Correction factors from page 14
const correctionFactors = {
    tempLucht: [
        { temp: 10, pvc: 1.22, xlpe: 1.15 }, { temp: 15, pvc: 1.17, xlpe: 1.12 },
        { temp: 20, pvc: 1.12, xlpe: 1.08 }, { temp: 25, pvc: 1.06, xlpe: 1.04 },
        { temp: 30, pvc: 1.00, xlpe: 1.00 }, { temp: 35, pvc: 0.93, xlpe: 0.96 },
        { temp: 40, pvc: 0.87, xlpe: 0.91 }, { temp: 45, pvc: 0.79, xlpe: 0.87 },
        { temp: 50, pvc: 0.71, xlpe: 0.82 }
    ],
    tempGrond: [
        { temp: 5, pvc: 1.14, xlpe: 1.10 }, { temp: 10, pvc: 1.09, xlpe: 1.07 },
        { temp: 15, pvc: 1.05, xlpe: 1.04 }, { temp: 20, pvc: 1.00, xlpe: 1.00 },
        { temp: 25, pvc: 0.95, xlpe: 0.96 }, { temp: 30, pvc: 0.90, xlpe: 0.92 },
        { temp: 35, pvc: 0.84, xlpe: 0.89 }, { temp: 40, pvc: 0.77, xlpe: 0.85 },
        { temp: 45, pvc: 0.71, xlpe: 0.79 }
    ],
    // Page 17, geperforeerde kabelgoot
    groupingLuchtGootPerforated: {
        touching: [
            { count: 1, factor: 1.00 }, { count: 2, factor: 0.84 }, { count: 3, factor: 0.80 },
            { count: 4, factor: 0.78 }, { count: 5, factor: 0.76 }, { count: 6, factor: 0.75 },
            { count: 8, factor: 0.74 }, { count: 10, factor: 0.72 }
        ],
        spaced: [
            { count: 1, factor: 1.00 }, { count: 2, factor: 0.98 }, { count: 3, factor: 0.96 },
            { count: 4, factor: 0.95 }, { count: 5, factor: 0.94 }, { count: 6, factor: 0.93 },
            { count: 8, factor: 0.92 }, { count: 10, factor: 0.91 }
        ]
    },
     // Page 17, niet-geperforeerde kabelgoot
    groupingLuchtGootNonPerforated: {
        touching: [
            { count: 1, factor: 0.95 }, { count: 2, factor: 0.80 }, { count: 3, factor: 0.76 },
            { count: 4, factor: 0.75 }, { count: 5, factor: 0.73 }, { count: 6, factor: 0.72 },
            { count: 8, factor: 0.71 }, { count: 10, factor: 0.70 }
        ],
        spaced: [
            { count: 1, factor: 0.95 }, { count: 2, factor: 0.90 }, { count: 3, factor: 0.88 },
            { count: 4, factor: 0.87 }, { count: 5, factor: 0.86 }, { count: 6, factor: 0.85 },
            { count: 8, factor: 0.84 }, { count: 10, factor: 0.83 }
        ]
    },
    // Factors for bundles against a wall or in a tube (Ref: AREI/NBN C33-100)
    groupingLuchtBundel: [
        { count: 1, factor: 1.00 }, { count: 2, factor: 0.80 }, { count: 3, factor: 0.70 },
        { count: 4, factor: 0.65 }, { count: 5, factor: 0.65 }, { count: 6, factor: 0.60 },
        { count: 7, factor: 0.60 }, { count: 8, factor: 0.60 }, { count: 9, factor: 0.55 }
    ],
    // Page 16
    groupingGrond: [
        { count: 1, factor: 1.00 }, { count: 2, factor: 0.82 }, { count: 3, factor: 0.76 },
        { count: 4, factor: 0.69 }, { count: 5, factor: 0.66 }, { count: 6, factor: 0.61 },
        { count: 8, factor: 0.57 }, { count: 10, factor: 0.53 }
    ]
};

// --- UI Interaction Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const inputTypeRadios = document.querySelectorAll('input[name="input-type"]');
    inputTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleInputType);
    });

    const installatieWijzeSelect = document.getElementById('installatiewijze');
    installatieWijzeSelect.addEventListener('change', toggleInstallatieOptions);

    const luchtPlaatsingSelect = document.getElementById('lucht-plaatsing');
    luchtPlaatsingSelect.addEventListener('change', toggleSpacingOption);

    const spanningSelect = document.getElementById('spanning');
    spanningSelect.addEventListener('change', toggleSysteemOptions);

    toggleInputType();
    toggleInstallatieOptions();
    toggleSpacingOption();
    toggleSysteemOptions(); // Initial call
});

function toggleSysteemOptions() {
    const spanning = document.getElementById('spanning').value;
    const acMonoSpan = document.getElementById('ac-mono-span');
    const acDrieSpan = document.getElementById('ac-drie-span');
    const acMonoRadio = document.getElementById('ac-mono');
    const acDrieRadio = document.getElementById('ac-drie');

    if (spanning === '400') {
        acMonoSpan.style.display = 'none';
        acDrieSpan.style.display = 'inline'; // or 'block'
        acDrieRadio.checked = true;
    } else { // 230V
        acMonoSpan.style.display = 'inline'; // or 'block'
        acDrieSpan.style.display = 'inline'; // or 'block'
    }
}

function toggleInputType() {
    const stroomGroup = document.getElementById('stroom-group');
    const vermogenGroup = document.getElementById('vermogen-group');
    const cosPhiGroup = document.querySelector('#cos-phi').parentElement;
    if (document.getElementById('stroom-radio').checked) {
        stroomGroup.style.display = 'block';
        vermogenGroup.style.display = 'none';
        cosPhiGroup.style.display = 'none';
    } else {
        stroomGroup.style.display = 'none';
        vermogenGroup.style.display = 'block';
        cosPhiGroup.style.display = 'block';
    }
}

function toggleInstallatieOptions() {
    const installatiewijze = document.getElementById('installatiewijze').value;
    const luchtOptions = document.getElementById('lucht-options');
    const grondOptions = document.getElementById('grond-options');

    if (installatiewijze === 'lucht') {
        luchtOptions.style.display = 'block';
        grondOptions.style.display = 'none';
    } else {
        luchtOptions.style.display = 'none';
        grondOptions.style.display = 'block';
    }
    toggleSpacingOption();
}

function toggleSpacingOption() {
    const installatiewijze = document.getElementById('installatiewijze').value;
    const luchtPlaatsing = document.getElementById('lucht-plaatsing').value;
    const spacingGroup = document.getElementById('kabel-spacing-group');

    if (installatiewijze === 'lucht' && (luchtPlaatsing === 'goot-geperforeerd' || luchtPlaatsing === 'goot-niet-geperforeerd')) {
        spacingGroup.style.display = 'block';
    } else {
        spacingGroup.style.display = 'none';
    }
}


// --- Calculation Logic ---

function getCorrectionFactor(table, value) {
    let factor = 1.0;
    for (let i = 0; i < table.length - 1; i++) {
        if (value >= table[i].temp && value < table[i+1].temp) {
            // Simple approach: take the factor of the lower bound
            return table[i];
        }
    }
    // Return last factor if value is out of upper bound
    return table[table.length - 1];
}

function getGroupingFactor(table, count) {
    if (count <= 1) return 1.0;
    let factor = table[table.length - 1].factor; // Default to last factor for high counts
    for (const entry of table) {
        if (count <= entry.count) {
            factor = entry.factor;
            break;
        }
    }
    return factor;
}


function calculate() {
    // 1. Get all inputs
    const isStroom = document.getElementById('stroom-radio').checked;
    const stroom = parseFloat(document.getElementById('stroom').value);
    const vermogen = parseFloat(document.getElementById('vermogen').value);
    const vermogenEenheid = document.getElementById('vermogen-eenheid').value;
    const cosPhi = parseFloat(document.getElementById('cos-phi').value);
    const kabellengte = parseFloat(document.getElementById('kabellengte').value);
    const spanning = parseInt(document.getElementById('spanning').value);
    const systeem = document.querySelector('input[name="systeem"]:checked').value;

    const kabeltype = document.getElementById('kabeltype').value;
    const installatiewijze = document.getElementById('installatiewijze').value;
    const temperatuur = parseInt(document.getElementById('temperatuur').value);
    const aantalKabels = parseInt(document.getElementById('aantal-kabels').value);
    const maxSpanningsval = parseFloat(document.getElementById('spanningsval-max').value);

    // Validate inputs
    if ((isStroom && isNaN(stroom)) || (!isStroom && isNaN(vermogen)) || isNaN(kabellengte)) {
        alert("Vul alle vereiste velden in.");
        return;
    }

    // 2. Calculate Load Current (Ib)
    let Ib = 0;
    if (isStroom) {
        Ib = stroom;
    } else {
        const P = vermogen * 1000; // in W or VA
        if (systeem === 'dc') {
            Ib = P / spanning;
        } else if (systeem === 'ac-mono') {
            Ib = (vermogenEenheid === 'kVA') ? P / spanning : P / (spanning * cosPhi);
        } else { // ac-drie
            Ib = (vermogenEenheid === 'kVA') ? P / (spanning * Math.sqrt(3)) : P / (spanning * Math.sqrt(3) * cosPhi);
        }
    }

    if (isNaN(Ib) || Ib <= 0) {
        alert("Kon de stroom niet berekenen. Controleer de vermogen- en spanningswaarden.");
        return;
    }

    // 3. Determine Correction Factors
    const kabelInfo = cableData[kabeltype];
    const insulationType = kabelInfo.type;
    let totalCorrectionFactor = 1.0;

    // Temperature factor
    const tempTable = installatiewijze === 'lucht' ? correctionFactors.tempLucht : correctionFactors.tempGrond;
    const tempFactors = getCorrectionFactor(tempTable, temperatuur);
    totalCorrectionFactor *= tempFactors[insulationType];

    // Grouping factor
    if (aantalKabels > 1) {
        if (installatiewijze === 'grond') {
             totalCorrectionFactor *= getGroupingFactor(correctionFactors.groupingGrond, aantalKabels);
        } else { // lucht
            const luchtPlaatsing = document.getElementById('lucht-plaatsing').value;
            if(luchtPlaatsing === 'bundel-muur' || luchtPlaatsing === 'buis-muur'){
                 totalCorrectionFactor *= getGroupingFactor(correctionFactors.groupingLuchtBundel, aantalKabels);
            } else { // on trays
                const isTouching = document.getElementById('spacing-ja').checked;
                const table = luchtPlaatsing === 'goot-geperforeerd' ? correctionFactors.groupingLuchtGootPerforated : correctionFactors.groupingLuchtGootNonPerforated;
                const factorTable = isTouching ? table.touching : table.spaced;
                totalCorrectionFactor *= getGroupingFactor(factorTable, aantalKabels);
            }
        }
    }

    // 4. Calculate Required Current Capacity (I'z)
    const Iz_required = Ib / totalCorrectionFactor;

    // 5. Find suitable cable section
    const izKey = installatiewijze === 'lucht' ? 'iz_lucht' : 'iz_grond';
    const availableSections = kabelInfo.sections;
    let finalSection = null;

    for (let i = 0; i < availableSections.length; i++) {
        const section = availableSections[i];
        if (section[izKey] >= Iz_required) {
            // This section is sufficient for current, now check voltage drop
            let delta_u_factor = 1;
            if (systeem === 'ac-mono' || systeem === 'dc') {
                 delta_u_factor = 2; // Phase and neutral conductor
            } else { // AC Driefasig
                 delta_u_factor = Math.sqrt(3);
            }
             // The V/A/km value in the manual seems to be phase-neutral.
             // For 3-phase, ΔU between phases = sqrt(3) * ΔU_phase-neutral
             // For 1-phase, ΔU = 2 * ΔU_phase-neutral
             // The tables in the manual seem to already account for this, presenting final length.
             // Let's use the provided V/A/km and a simplified formula based on the example.
             // ΔU (V) = (ΔU_table * I * L) / 1000
             // For 3-phase, the table is likely already sqrt(3) * R, so we just use it.
             // The example on P.8 doesn't multiply by sqrt(3). It seems the ΔU value is for the whole system.

            let deltaU_V = (section.delta_u * Ib * kabellengte) / 1000;
            if(systeem === 'ac-mono' || systeem === 'dc') {
                // Single phase or DC: multiply by 2 for the return path
                deltaU_V *= 2;
            } else { // 3-phase
                // Three phase: multiply by sqrt(3) for line-to-line voltage drop
                deltaU_V *= Math.sqrt(3);
            }

            const deltaU_percent = deltaU_V / spanning;

            if (deltaU_percent <= maxSpanningsval) {
                finalSection = section;
                break; // Found the right section
            }
            // If voltage drop is too high, the loop continues to the next bigger section
        }
    }

    // 6. Display results
    const resultStep = document.getElementById('result-step');
    if (finalSection) {
        document.getElementById('berekende-sectie').textContent = `${finalSection.size} mm²`;
        let deltaU_V_final = (finalSection.delta_u * Ib * kabellengte) / 1000;
        if (systeem === 'ac-mono' || systeem === 'dc') {
            deltaU_V_final *= 2;
        } else {
            deltaU_V_final *= Math.sqrt(3);
        }
        const deltaU_percent_final = deltaU_V_final / spanning;
        document.getElementById('spanningsval').textContent = `${deltaU_V_final.toFixed(2)} V`;
        document.getElementById('spanningsval-procent').textContent = `${(deltaU_percent_final * 100).toFixed(2)} %`;
        document.getElementById('vereiste-stroom').textContent = `${Iz_required.toFixed(2)} A`;
        document.getElementById('iz-kabel').textContent = `${finalSection[izKey]} A`;
        resultStep.style.display = 'block';
    } else {
        document.getElementById('berekende-sectie').textContent = "Geen geschikte kabel gevonden. Stroom te hoog.";
        document.getElementById('spanningsval').textContent = "-";
        document.getElementById('spanningsval-procent').textContent = "-";
        document.getElementById('vereiste-stroom').textContent = `${Iz_required.toFixed(2)} A`;
        document.getElementById('iz-kabel').textContent = "-";
        resultStep.style.display = 'block';
    }
}
