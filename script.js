document.addEventListener('DOMContentLoaded', function() {
    // --- DATA ---
    const acChargers = [{"id":52,"name":"Raedian NEX AC (22 kW)","type":"ev_charger","brand":"Raedian","price":"600.00","specs":{"ocpp":true,"phase":"three","power_kw":22,"input_current":32},"is_active":1},{"id":51,"name":"Raedian NEX AC (7.4 kW)","type":"ev_charger","brand":"Raedian","price":"550.00","specs":{"ocpp":true,"phase":"single","power_kw":7.4,"input_current":32},"is_active":1}];
    const dcChargers = [{"id":48,"name":"Raedian GALAXY P120 (120 kW)","type":"ev_charger","brand":"Raedian","price":"15000.00","specs":{"ocpp":true,"is_dc":true,"phase":"three","power_kw":120,"input_current":185},"is_active":1},{"id":49,"name":"Raedian GALAXY P180 (180 kW)","type":"ev_charger","brand":"Raedian","price":"22000.00","specs":{"ocpp":true,"is_dc":true,"phase":"three","power_kw":180,"input_current":275},"is_active":1},{"id":50,"name":"Raedian GALAXY P240 (240 kW)","type":"ev_charger","brand":"Raedian","price":"28000.00","specs":{"ocpp":true,"is_dc":true,"phase":"three","power_kw":240,"input_current":363},"is_active":1},{"id":58,"name":"Raedian GALAXY P80 (80 kW)","type":"ev_charger","brand":"Raedian","price":"15000.00","specs":{"ocpp":true,"is_dc":true,"phase":"three","power_kw":80,"input_current":125},"is_active":1}];
    const cableData = {
        "XVB": { "type": "xlpe", "sections": [{ "size": 1.5, "iz_lucht": 23, "iz_grond": 30, "delta_u": 21.60 }, { "size": 2.5, "iz_lucht": 32, "iz_grond": 40, "delta_u": 13.30 }, { "size": 4, "iz_lucht": 42, "iz_grond": 50, "delta_u": 8.40 }, { "size": 6, "iz_lucht": 54, "iz_grond": 65, "delta_u": 5.70 }, { "size": 10, "iz_lucht": 75, "iz_grond": 90, "delta_u": 3.40 }, { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.20 }, { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.50 }, { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.11 }, { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.85 }, { "size": 70, "iz_lucht": 246, "iz_grond": 265, "delta_u": 0.63 }, { "size": 95, "iz_lucht": 299, "iz_grond": 315, "delta_u": 0.48 }, { "size": 120, "iz_lucht": 346, "iz_grond": 360, "delta_u": 0.40 }, { "size": 150, "iz_lucht": 399, "iz_grond": 405, "delta_u": 0.35 }, { "size": 185, "iz_lucht": 456, "iz_grond": 460, "delta_u": 0.31 }, { "size": 240, "iz_lucht": 538, "iz_grond": 530, "delta_u": 0.26 }] },
        "XGB": { "type": "xlpe", "sections": [{ "size": 1.5, "iz_lucht": 26, "iz_grond": 30, "delta_u": 25.00 }, { "size": 2.5, "iz_lucht": 36, "iz_grond": 50, "delta_u": 15.40 }, { "size": 4, "iz_lucht": 49, "iz_grond": 50, "delta_u": 9.70 }, { "size": 6, "iz_lucht": 63, "iz_grond": 65, "delta_u": 6.50 }, { "size": 10, "iz_lucht": 86, "iz_grond": 90, "delta_u": 4.00 }, { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.20 }, { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.50 }, { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.11 }, { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.85 }, { "size": 70, "iz_lucht": 246, "iz_grond": 265, "delta_u": 0.63 }, { "size": 95, "iz_lucht": 299, "iz_grond": 315, "delta_u": 0.48 }, { "size": 120, "iz_lucht": 346, "iz_grond": 360, "delta_u": 0.40 }, { "size": 150, "iz_lucht": 399, "iz_grond": 405, "delta_u": 0.35 }, { "size": 185, "iz_lucht": 456, "iz_grond": 460, "delta_u": 0.31 }, { "size": 240, "iz_lucht": 538, "iz_grond": 530, "delta_u": 0.26 }, { "size": 300, "iz_lucht": 620, "iz_grond": 600, "delta_u": 0.21 }] },
        "EXVB": { "type": "pvc", "sections": [{ "size": 1.5, "iz_lucht": 23, "iz_grond": 30, "delta_u": 21.50 }, { "size": 2.5, "iz_lucht": 32, "iz_grond": 40, "delta_u": 13.20 }, { "size": 4, "iz_lucht": 42, "iz_grond": 50, "delta_u": 8.25 }, { "size": 6, "iz_lucht": 54, "iz_grond": 65, "delta_u": 5.55 }, { "size": 10, "iz_lucht": 75, "iz_grond": 90, "delta_u": 3.30 }, { "size": 16, "iz_lucht": 100, "iz_grond": 120, "delta_u": 2.12 }, { "size": 25, "iz_lucht": 127, "iz_grond": 150, "delta_u": 1.37 }, { "size": 35, "iz_lucht": 157, "iz_grond": 175, "delta_u": 1.01 }, { "size": 50, "iz_lucht": 192, "iz_grond": 205, "delta_u": 0.77 }, { "size": 70, "iz_lucht": 246, "iz_grond": 250, "delta_u": 0.56 }, { "size": 95, "iz_lucht": 299, "iz_grond": 305, "delta_u": 0.43 }, { "size": 120, "iz_lucht": 346, "iz_grond": 345, "delta_u": 0.36 }, { "size": 150, "iz_lucht": 399, "iz_grond": 390, "delta_u": 0.31 }, { "size": 185, "iz_lucht": 456, "iz_grond": 440, "delta_u": 0.27 }, { "size": 240, "iz_lucht": 538, "iz_grond": 510, "delta_u": 0.23 }] }
    };
    const correctionFactors = {
        tempLucht: [{ temp: 10, pvc: 1.22, xlpe: 1.15 }, { temp: 15, pvc: 1.17, xlpe: 1.12 }, { temp: 20, pvc: 1.12, xlpe: 1.08 }, { temp: 25, pvc: 1.06, xlpe: 1.04 }, { temp: 30, pvc: 1.00, xlpe: 1.00 }, { temp: 35, pvc: 0.93, xlpe: 0.96 }, { temp: 40, pvc: 0.87, xlpe: 0.91 }, { temp: 45, pvc: 0.79, xlpe: 0.87 }, { temp: 50, pvc: 0.71, xlpe: 0.82 }],
        tempGrond: [{ temp: 5, pvc: 1.14, xlpe: 1.10 }, { temp: 10, pvc: 1.09, xlpe: 1.07 }, { temp: 15, pvc: 1.05, xlpe: 1.04 }, { temp: 20, pvc: 1.00, xlpe: 1.00 }, { temp: 25, pvc: 0.95, xlpe: 0.96 }, { temp: 30, pvc: 0.90, xlpe: 0.92 }, { temp: 35, pvc: 0.84, xlpe: 0.89 }, { temp: 40, pvc: 0.77, xlpe: 0.85 }, { temp: 45, pvc: 0.71, xlpe: 0.79 }],
        groupingLuchtGootPerforated: { touching: [{ count: 1, factor: 1.00 }, { count: 2, factor: 0.84 }, { count: 3, factor: 0.80 }, { count: 4, factor: 0.78 }, { count: 5, factor: 0.76 }, { count: 6, factor: 0.75 }, { count: 8, factor: 0.74 }, { count: 10, factor: 0.72 }], spaced: [{ count: 1, factor: 1.00 }, { count: 2, factor: 0.98 }, { count: 3, factor: 0.96 }, { count: 4, factor: 0.95 }, { count: 5, factor: 0.94 }, { count: 6, factor: 0.93 }, { count: 8, factor: 0.92 }, { count: 10, factor: 0.91 }] },
        groupingLuchtGootNonPerforated: { touching: [{ count: 1, factor: 0.95 }, { count: 2, factor: 0.80 }, { count: 3, factor: 0.76 }, { count: 4, factor: 0.75 }, { count: 5, factor: 0.73 }, { count: 6, factor: 0.72 }, { count: 8, factor: 0.71 }, { count: 10, factor: 0.70 }], spaced: [{ count: 1, factor: 0.95 }, { count: 2, factor: 0.90 }, { count: 3, factor: 0.88 }, { count: 4, factor: 0.87 }, { count: 5, factor: 0.86 }, { count: 6, factor: 0.85 }, { count: 8, factor: 0.84 }, { count: 10, factor: 0.83 }] },
        groupingLuchtBundel: [{ count: 1, factor: 1.00 }, { count: 2, factor: 0.80 }, { count: 3, factor: 0.70 }, { count: 4, factor: 0.65 }, { count: 5, factor: 0.65 }, { count: 6, factor: 0.60 }, { count: 7, factor: 0.60 }, { count: 8, factor: 0.60 }, { count: 9, factor: 0.55 }],
        groupingGrond: [{ count: 1, factor: 1.00 }, { count: 2, factor: 0.82 }, { count: 3, factor: 0.76 }, { count: 4, factor: 0.69 }, { count: 5, factor: 0.66 }, { count: 6, factor: 0.61 }, { count: 8, factor: 0.57 }, { count: 10, factor: 0.53 }]
    };
    const standardBreakerSizes = [16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 180, 200, 250, 300, 400];

    // --- DOM Elements ---
    const form = document.getElementById('cableForm');
    const allInputs = form.querySelectorAll('input, select');
    const resultsSection = document.getElementById('results-section');
    const resultsOutput = document.getElementById('resultsOutput');
    const notesSection = document.getElementById('notes-section');

    // --- UI LOGIC ---
    function toggleCalcMode() {
        const mode = document.querySelector('input[name="calcMode"]:checked').value;
        document.getElementById('ev-charger-inputs').style.display = mode === 'ev' ? 'block' : 'none';
        document.getElementById('manual-inputs').style.display = mode === 'manual' ? 'block' : 'none';
        runCalculation();
    }

    function rebuildAmperageDropdown() {
        const chargerType = document.querySelector('input[name="chargerType"]:checked').value;
        const phase = document.getElementById('phase').value;
        const amperageSelect = document.getElementById('amperage');

        amperageSelect.innerHTML = '';
        const chargersToList = (chargerType === 'ac') ? acChargers.filter(c => c.specs.phase === phase) : dcChargers;

        if (chargersToList.length > 0) {
            chargersToList.forEach(charger => {
                const option = document.createElement('option');
                option.value = charger.specs.input_current;
                option.textContent = `${charger.name}`;
                amperageSelect.appendChild(option);
            });
        } else {
            amperageSelect.innerHTML = '<option value="">Geen modellen beschikbaar</option>';
        }
    }

    function setupEventListeners() {
        document.querySelectorAll('input[name="calcMode"]').forEach(radio => radio.addEventListener('change', toggleCalcMode));
        document.querySelectorAll('input[name="chargerType"]').forEach(radio => radio.addEventListener('change', () => { rebuildAmperageDropdown(); runCalculation(); }));
        document.getElementById('phase').addEventListener('change', () => { rebuildAmperageDropdown(); runCalculation(); });
        document.getElementById('spanning').addEventListener('change', runCalculation);
        document.querySelectorAll('input[name="systeem"]').forEach(radio => radio.addEventListener('change', runCalculation));
        document.querySelectorAll('input[name="input-type"]').forEach(radio => radio.addEventListener('change', runCalculation));

        const debouncedCalc = debounce(runCalculation, 400);
        allInputs.forEach(input => {
            if (input.type === 'number') {
                input.addEventListener('input', debouncedCalc);
            } else {
                input.addEventListener('change', runCalculation);
            }
        });
    }

    // --- CALCULATION LOGIC ---
    function runCalculation() {
        const mode = document.querySelector('input[name="calcMode"]:checked').value;
        let Ib, spanning, phase, calcTitle;

        if (mode === 'ev') {
            const amperageSelect = document.getElementById('amperage');
            if (!amperageSelect.value) { resultsSection.style.display = 'none'; return; }
            Ib = parseFloat(amperageSelect.value);
            phase = document.getElementById('phase').value;
            spanning = phase === 'single' ? 230 : 400;
            calcTitle = amperageSelect.options[amperageSelect.selectedIndex].text;
        } else { // Manual mode
            const isStroom = document.getElementById('stroom-radio').checked;
            spanning = parseInt(document.getElementById('spanning').value);
            phase = document.querySelector('input[name="systeem"]:checked').value;

            if (isStroom) {
                Ib = parseFloat(document.getElementById('stroom').value);
            } else {
                const vermogen = parseFloat(document.getElementById('vermogen').value) * 1000;
                const cosPhi = parseFloat(document.getElementById('cos-phi').value);
                if (phase === 'single') {
                    Ib = vermogen / (spanning * cosPhi);
                } else {
                    Ib = vermogen / (spanning * Math.sqrt(3) * cosPhi);
                }
            }
            calcTitle = `Manuele Invoer: ${Ib.toFixed(0)}A`;
        }

        if (isNaN(Ib) || Ib <= 0) { resultsSection.style.display = 'none'; return; }

        // Shared calculation logic
        const kabellengte = parseFloat(document.getElementById('length').value);
        const installatiewijze = document.getElementById('installatiewijze').value;
        const temperatuur = parseInt(document.getElementById('temperatuur').value);
        const aantalKabels = parseInt(document.getElementById('aantal-kabels').value);
        const maxSpanningsval = 0.05;
        const kabelInfo = cableData["XVB"];
        const insulationType = kabelInfo.type;

        let totalCorrectionFactor = 1.0;
        const tempTable = installatiewijze === 'lucht' ? correctionFactors.tempLucht : correctionFactors.tempGrond;
        const tempFactors = getCorrectionFactor(tempTable, temperatuur);
        totalCorrectionFactor *= tempFactors[insulationType];

        if (aantalKabels > 1) {
            // ... [grouping factor logic as before] ...
             if (installatiewijze === 'grond') {
                 totalCorrectionFactor *= getGroupingFactor(correctionFactors.groupingGrond, aantalKabels);
            } else {
                const luchtPlaatsing = document.getElementById('lucht-plaatsing').value;
                if(luchtPlaatsing.includes('bundel') || luchtPlaatsing.includes('buis')){
                     totalCorrectionFactor *= getGroupingFactor(correctionFactors.groupingLuchtBundel, aantalKabels);
                } else {
                    const isTouching = document.getElementById('spacing-ja').checked;
                    const table = luchtPlaatsing.includes('geperforeerd') ? correctionFactors.groupingLuchtGootPerforated : correctionFactors.groupingLuchtGootNonPerforated;
                    totalCorrectionFactor *= getGroupingFactor(isTouching ? table.touching : table.spaced, aantalKabels);
                }
            }
        }

        const recommendedBreaker = findNextStandardBreaker(Ib, mode);
        const izKey = installatiewijze === 'lucht' ? 'iz_lucht' : 'iz_grond';
        let finalSection = null;

        for (let i = 0; i < kabelInfo.sections.length; i++) {
            const section = kabelInfo.sections[i];
            if (section[izKey] * totalCorrectionFactor >= recommendedBreaker) {
                let deltaU_V = (section.delta_u * Ib * kabellengte) / 1000;
                if (phase === 'single') { deltaU_V *= 2; }
                else { deltaU_V *= Math.sqrt(3); }

                if ((deltaU_V / spanning) <= maxSpanningsval) {
                    finalSection = section;
                    break;
                }
            }
        }

        if (finalSection) {
            let deltaU_V_final = (finalSection.delta_u * Ib * kabellengte) / 1000;
            if (phase === 'single') { deltaU_V_final *= 2; }
            else { deltaU_V_final *= Math.sqrt(3); }
            const voltageDrop = (deltaU_V_final / spanning * 100).toFixed(2);

            displayResults({
                success: true, results: { recommendedSection: finalSection.size, recommendedBreaker, voltageDrop },
                inputs: { calcMode: mode, title: calcTitle }
            });
        } else {
            displayError("Geen geschikte kabel gevonden. De vereiste stroom is te hoog voor de beschikbare secties onder deze installatieomstandigheden.");
        }
    }

    function findNextStandardBreaker(current, mode) {
        const factor = 1.05; // User-requested factor for all modes
        const requiredBreakerCurrent = current * factor;
        for (const size of standardBreakerSizes) {
            if (size >= requiredBreakerCurrent) return size;
        }
        return standardBreakerSizes[standardBreakerSizes.length - 1];
    }

    function getCorrectionFactor(table, value) {
        if (value <= table[0].temp) return table[0];
        if (value >= table[table.length - 1].temp) return table[table.length - 1];
        for (let i = 0; i < table.length - 1; i++) {
            if (value >= table[i].temp && value <= table[i+1].temp) return table[i];
        }
        return table[table.length - 1];
    }

    function getGroupingFactor(table, count) {
        if (count <= 1) return 1.0;
        for (const entry of table) { if (count <= entry.count) return entry.factor; }
        return table[table.length - 1].factor;
    }

    function displayResults(result) {
        // ... [display logic from V2, adapted for combined mode] ...
        const res = result.results;
        const inputs = result.inputs;
        const voltageDropStatus = res.voltageDrop <= 3 ? 'text-success' : (res.voltageDrop <= 5 ? 'text-warning' : 'text-danger');

        const html = `
            <div class="card-header">Aanbeveling voor: ${inputs.title}</div>
            <div class="card-body"><div class="row">
                <div class="col-sm-4 border-end">
                    <h5>Aanbevolen Kabel</h5><p class="h3">${res.recommendedSection} mm²</p><span class="text-muted">(XVB/XGB/EXVB)</span>
                </div>
                <div class="col-sm-4 border-end">
                    <h5>Vereiste Automaat</h5><p class="h3">${res.recommendedBreaker}A</p><span class="text-muted">Veiligheidsautomaat</span>
                </div>
                <div class="col-sm-4">
                    <h5>Spanningsval</h5><p class="h3 ${voltageDropStatus}">${res.voltageDrop}%</p><span class="text-muted">(Max Toegelaten: 5%)</span>
                </div>
            </div></div>`;
        resultsOutput.innerHTML = html;
        updateNotes(inputs.calcMode === 'ev' ? document.querySelector('input[name="chargerType"]:checked').value : 'manual');
        resultsSection.style.display = 'block';
    }

    function displayError(message) {
        resultsOutput.innerHTML = `<div class="card-body" style="text-align: center; padding: 2rem;"><div class="alert alert-danger">${message}</div></div>`;
        resultsSection.style.display = 'block';
        notesSection.style.display = 'none';
    }

    function updateNotes(type) {
        if (type === 'manual') {
            notesSection.style.display = 'none';
            return;
        }
        notesSection.style.display = 'block';
        const isAC = type === 'ac';
        const acNotes = `<h4><i class="bx bx-info-circle me-2"></i>Belangrijke AREI Installatie-opmerkingen</h4><ul><li>De AC lader moet op een <strong>aparte, afgezekerde kring</strong> aangesloten worden.</li><li>De kring moet beveiligd zijn met een <strong>30mA Type A differentieelschakelaar</strong>.</li><li>De AC lader zelf moet een geïntegreerde <strong>6mA DC-lekstroomdetectie</strong> hebben.</li><li>Deze berekening is een schatting. Een erkend elektricien moet de finale validatie en installatie uitvoeren.</li></ul>`;
        const dcNotes = `<h4><i class="bx bxs-error-alt me-2"></i>Kritische opmerkingen voor DC Snelladers</h4><ul><li>DC Snellader-installaties zijn complexe projecten die vaak een <strong>aparte transformator</strong> en nieuwe aansluiting van de netbeheerder (bv. Fluvius) vereisen.</li><li>Een <strong>Type B differentieelschakelaar</strong> is doorgaans verplicht.</li><li>Deze calculator berekent enkel de <strong>AC voedingskabel</strong> naar de lader, niet de DC kabel naar het voertuig.</li><li><strong>Deze tool is enkel voor een eerste inschatting.</strong> Het finale ontwerp en de installatie MOETEN door een gekwalificeerd ingenieur en erkend elektricien gebeuren.</li></ul>`;
        notesSection.innerHTML = isAC ? acNotes : dcNotes;
        notesSection.className = `alert ${isAC ? 'alert-info' : 'alert-danger'}`;
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) { clearTimeout(timeout); timeout = setTimeout(() => func.apply(this, args), delay); };
    }

    // --- INITIAL STATE ---
    setupEventListeners();
    toggleCalcMode();
});
