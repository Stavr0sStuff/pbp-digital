/* Please Be Patient local tabletop
 * Rules authority: ../rules/rules-v1.2.md
 * Card data: ../data/patient-card-{colors,values}.csv
 */

const COLORS = {
  R: { name: 'Red', className: 'red' },
  Y: { name: 'Yellow', className: 'yellow' },
  B: { name: 'Blue', className: 'blue' },
};
const ASSET_VERSION = '20260924-03';
const cardAsset = (image) => `assets/cards/pbp-cards_${image}.jpg?v=${ASSET_VERSION}`;
const thankYouAsset = (image) => `assets/thankyou/${image}?v=${ASSET_VERSION}`;

const ZONES = ['TL', 'ML', 'BL', 'C', 'TR', 'MR', 'BR'];
const ZONE_LAYOUT = {
  TL: { center: { x: 9.09, y: 16.03 }, size: { width: 30, height: 18 }, radius: 50 },
  ML: { center: { x: 9.09, y: 50.01 }, size: { width: 30, height: 18 }, radius: 50 },
  BL: { center: { x: 9.09, y: 83.95 }, size: { width: 30, height: 18 }, radius: 50 },
  C: { center: { x: 49.97, y: 89.22 }, size: { width: 24, height: 18 }, radius: 50 },
  TR: { center: { x: 90.83, y: 16.03 }, size: { width: 30, height: 18 }, radius: 50 },
  MR: { center: { x: 90.83, y: 50.01 }, size: { width: 30, height: 18 }, radius: 50 },
  BR: { center: { x: 90.83, y: 83.95 }, size: { width: 30, height: 18 }, radius: 50 },
};
const EDGE_PAIRS = {
  left: [['TL', 'TR'], ['ML', 'MR'], ['BL', 'BR']],
  right: [['TR', 'TL'], ['MR', 'ML'], ['BR', 'BL']],
};

const PATIENTS = [
  { id: 'P1', name: 'Miss Placed', image: 1, thankYou: 'Repair', thankYouImage: 'thankyou-repair.png', colors: { TL: 'B', ML: 'B', BL: 'B', C: 'B', TR: 'Y', MR: 'B', BR: 'Y' }, values: { TL: 4, ML: 6, BL: 1, TR: 2, MR: 5, BR: 3 } },
  { id: 'P2', name: 'Manney Quinn', image: 2, thankYou: 'Patient Deck', thankYouImage: 'thankyou-patientdeck.png', colors: { TL: 'R', ML: 'R', BL: 'Y', C: 'Y', TR: 'Y', MR: 'Y', BR: 'Y' }, values: { TL: 4, ML: 1, BL: 6, TR: 5, MR: 3, BR: 2 } },
  { id: 'P3', name: 'Justin Case', image: 3, thankYou: 'Waiting Room', thankYouImage: 'thankyou-waitingroom.png', colors: { TL: 'Y', ML: 'R', BL: 'Y', C: 'B', TR: 'B', MR: 'R', BR: 'R' }, values: { TL: 1, ML: 5, BL: 4, TR: 6, MR: 2, BR: 3 } },
  { id: 'P4', name: 'Claire Voyant', image: 4, thankYou: 'Waiting Room', thankYouImage: 'thankyou-waitingroom.png', colors: { TL: 'B', ML: 'B', BL: 'R', C: 'R', TR: 'B', MR: 'R', BR: 'R' }, values: { TL: 3, ML: 2, BL: 6, TR: 1, MR: 4, BR: 5 } },
  { id: 'P5', name: 'Barb D. Wire', image: 5, thankYou: 'Waiting Room', thankYouImage: 'thankyou-waitingroom.png', colors: { TL: 'B', ML: 'B', BL: 'Y', C: 'Y', TR: 'B', MR: 'R', BR: 'R' }, values: { TL: 3, ML: 5, BL: 1, TR: 4, MR: 6, BR: 2 } },
  { id: 'P6', name: 'Luke Warm', image: 6, thankYou: 'Patient Deck', thankYouImage: 'thankyou-patientdeck.png', colors: { TL: 'B', ML: 'B', BL: 'Y', C: 'B', TR: 'Y', MR: 'R', BR: 'B' }, values: { TL: 2, ML: 4, BL: 3, TR: 6, MR: 5, BR: 1 } },
  { id: 'P7', name: 'Chris P. Bacon', image: 7, thankYou: 'Repair', thankYouImage: 'thankyou-repair.png', colors: { TL: 'Y', ML: 'R', BL: 'R', C: 'Y', TR: 'B', MR: 'R', BR: 'Y' }, values: { TL: 6, ML: 1, BL: 2, TR: 5, MR: 3, BR: 4 } },
  { id: 'P8', name: 'Carrie Oakey', image: 8, thankYou: 'Patient Deck', thankYouImage: 'thankyou-patientdeck.png', colors: { TL: 'B', ML: 'Y', BL: 'R', C: 'R', TR: 'Y', MR: 'B', BR: 'Y' }, values: { TL: 6, ML: 3, BL: 5, TR: 2, MR: 4, BR: 1 } },
  { id: 'P9', name: 'Otto Pilot', image: 9, thankYou: 'Hire', thankYouImage: 'thankyou-hire-staff.png', colors: { TL: 'B', ML: 'R', BL: 'Y', C: 'B', TR: 'R', MR: 'B', BR: 'Y' }, values: { TL: 1, ML: 3, BL: 2, TR: 4, MR: 6, BR: 5 } },
  { id: 'P10', name: 'Maggy Net', image: 10, thankYou: 'Repair', thankYouImage: 'thankyou-repair.png', colors: { TL: 'Y', ML: 'R', BL: 'R', C: 'R', TR: 'B', MR: 'B', BR: 'Y' }, values: { TL: 5, ML: 6, BL: 3, TR: 1, MR: 2, BR: 4 } },
  { id: 'P11', name: 'Meg A. Phone', image: 11, thankYou: 'Hire', thankYouImage: 'thankyou-hire-staff.png', colors: { TL: 'B', ML: 'R', BL: 'Y', C: 'Y', TR: 'B', MR: 'R', BR: 'Y' }, values: { TL: 5, ML: 2, BL: 4, TR: 3, MR: 1, BR: 6 } },
  { id: 'P12', name: 'Al Dente', image: 12, thankYou: 'Hire', thankYouImage: 'thankyou-hire-staff.png', colors: { TL: 'Y', ML: 'R', BL: 'Y', C: 'R', TR: 'B', MR: 'R', BR: 'R' }, values: { TL: 2, ML: 4, BL: 5, TR: 3, MR: 1, BR: 6 } },
];

const STAFF = [
  { id: 'specialist', name: 'Specialist', image: 16, ability: 'Set one other die to any value.', key: 'specialist' },
  { id: 'scheduler', name: 'Scheduler', image: 17, ability: 'Swap the values of two other dice of different colors.', key: 'scheduler' },
  { id: 'consultant', name: 'Consultant', image: 18, ability: 'Increase one die by 1 and decrease another die by 1.', key: 'consultant' },
  { id: 'nurse', name: 'Nurse', image: 14, ability: 'Move one Treatment Cube to another Ailment.', key: 'nurse' },
  { id: 'labtech', name: 'Lab Tech', image: 15, ability: 'Reroll any number of unassigned dice.', key: 'labtech' },
];

let state;
let selectedDieId = null;
let showLegalZones = false;
let gameRandom = Math.random;

const $ = (selector) => document.querySelector(selector);
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const clone = (value) => JSON.parse(JSON.stringify(value));
const shuffle = (items, random = gameRandom) => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const colorName = (color) => COLORS[color]?.name || color;
const dieLabel = (die) => `${colorName(die.color)} ${die.value}`;
const cubeKey = (patientId, zone) => `${patientId}:${zone}`;

function mulberry32(seed) {
  let value = seed >>> 0;
  return () => {
    let next = value = (value + 0x6D2B79F5) >>> 0;
    next = Math.imul(next ^ (next >>> 15), next | 1);
    next ^= next + Math.imul(next ^ (next >>> 7), next | 61);
    return ((next ^ (next >>> 14)) >>> 0) / 4294967296;
  };
}

function randomSeed() {
  const cryptoSource = globalThis.crypto;
  if (cryptoSource?.getRandomValues) {
    try {
      const value = new Uint32Array(1);
      cryptoSource.getRandomValues(value);
      return value[0];
    } catch {
      // Some restricted local contexts expose crypto but disallow its use.
    }
  }
  return Math.floor(Math.random() * 4294967296) >>> 0;
}

function validateSeedValue(value, path = '$.seed') {
  if (!Number.isInteger(value) || value < 0 || value > 4294967295) {
    throw new Error(`${path}: expected an unsigned 32-bit integer from 0 through 4294967295.`);
  }
  return value >>> 0;
}

function createInitialState(seed) {
  return {
    seed,
    round: 0,
    phase: 'setup',
    status: 'playing',
    patientDeck: [],
    staffDeck: [],
    waiting: [],
    discard: [],
    staffRoom: [],
    staffOffer: [],
    dicePool: [{ id: 'R1', color: 'R' }, { id: 'Y1', color: 'Y' }, { id: 'B1', color: 'B' }],
    nextDice: [],
    upgradeUsed: { R: false, Y: false, B: false },
    wear: { R: 2, Y: 2, B: 2 },
    treatmentCubes: 7,
    cubes: {},
    rolledDice: [],
    treatments: [],
    staffUsed: [],
    maintenance: null,
    upgrade: null,
    diagnosis: {},
    admissionQueue: [],
    admissionCard: null,
    admissionPreviewIndex: null,
    admissionDragging: false,
    admissionDragPointerId: null,
    admissionDragOriginIndex: null,
    nurseDragging: false,
    nurseDragPointerId: null,
    nurseDragSource: null,
    nurseDragTarget: null,
    nurseDragPreviousDestination: null,
    curedThisRound: [],
    dischargeQueue: [],
    pendingThankYou: null,
    staffAction: null,
    pendingStaffActivation: null,
    pendingWorkAction: null,
    pendingTreatment: null,
    rearrangeOrder: [],
    rearrangeDragging: false,
    rearrangeDragPointerId: null,
    rearrangeDragSourceId: null,
    rearrangeDragOriginOrder: null,
    rearrangeDragTargetIndex: null,
    patientDeckOrder: [],
    patientDeckDragging: false,
    patientDeckDragPointerId: null,
    patientDeckDragSourceId: null,
    patientDeckDragOriginOrder: null,
    patientDeckDragTargetIndex: null,
    history: [],
    message: 'Choose one of the two staff members to begin your first shift.',
  };
}

function newGame(seedValue) {
  const seed = seedValue === undefined ? randomSeed() : validateSeedValue(seedValue);
  const nextRandom = mulberry32(seed);
  const nextState = createInitialState(seed);
  nextState.patientDeck = shuffle(PATIENTS.map(clone), nextRandom);
  nextState.staffDeck = shuffle(STAFF.map(clone), nextRandom);
  nextState.waiting.push(nextState.patientDeck.pop(), nextState.patientDeck.pop());
  nextState.staffOffer.push(nextState.staffDeck.pop(), nextState.staffDeck.pop());
  state = nextState;
  gameRandom = nextRandom;
  selectedDieId = null;
  showLegalZones = false;
  if (typeof legalZonesToggle !== 'undefined') legalZonesToggle.checked = false;
  logEvent('Setup', `Two patients are waiting. Choose your first staff member.`);
  render();
}

function setupError(path, message) {
  throw new Error(`${path}: ${message}`);
}

function setupObject(value, path, allowed, required = []) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) setupError(path, 'expected an object.');
  for (const key of Object.keys(value)) {
    if (!allowed.includes(key)) setupError(`${path}.${key}`, 'unknown field.');
  }
  for (const key of required) {
    if (!Object.hasOwn(value, key)) setupError(`${path}.${key}`, 'required field is missing.');
  }
  return value;
}

function setupArray(value, path) {
  if (!Array.isArray(value)) setupError(path, 'expected an array.');
  return value;
}

function setupCard(id, path, cards, locations) {
  if (typeof id !== 'string' || !cards.has(id)) setupError(path, `unknown card ID ${JSON.stringify(id)}.`);
  if (locations.has(id)) setupError(path, `${id} is already listed at ${locations.get(id)}.`);
  locations.set(id, path);
  return clone(cards.get(id));
}

function setupCardList(value, path, cards, locations) {
  return setupArray(value, path).map((id, index) => setupCard(id, `${path}[${index}]`, cards, locations));
}

function buildSetupCandidate(data) {
  const setup = setupObject(data, '$', ['version', 'seed', 'round', 'phase', 'patients', 'staff', 'wear', 'cubes', 'dice'], ['version', 'seed', 'phase', 'patients', 'staff']);
  if (setup.version !== 1) setupError('$.version', 'only version 1 is supported.');
  const seed = validateSeedValue(setup.seed);
  if (!['admission', 'diagnosis', 'work', 'discharge'].includes(setup.phase)) setupError('$.phase', 'expected admission, diagnosis, work, or discharge.');
  const phase = setup.phase;
  const round = setup.round === undefined ? 1 : setup.round;
  if (!Number.isInteger(round) || round < 1) setupError('$.round', 'expected a positive integer.');
  const random = mulberry32(seed);

  const patientLocations = new Map();
  const patientData = setupObject(setup.patients, '$.patients', ['waiting', 'discard', 'deckTop', 'arrival', 'admissionQueue', 'dischargeQueue'], ['waiting']);
  if (phase === 'admission' && !Object.hasOwn(patientData, 'arrival')) setupError('$.patients.arrival', 'required during Admission.');
  if (phase !== 'admission' && (Object.hasOwn(patientData, 'arrival') || Object.hasOwn(patientData, 'admissionQueue'))) {
    setupError('$.patients', 'arrival and admissionQueue are only valid during Admission.');
  }
  if (phase === 'discharge' && !Object.hasOwn(patientData, 'dischargeQueue')) setupError('$.patients.dischargeQueue', 'required during Discharge.');
  if (phase !== 'discharge' && Object.hasOwn(patientData, 'dischargeQueue')) setupError('$.patients.dischargeQueue', 'only valid during Discharge.');

  const patientCards = new Map(PATIENTS.map((patient) => [patient.id, patient]));
  const waiting = setupCardList(patientData.waiting, '$.patients.waiting', patientCards, patientLocations);
  if (waiting.length > 6) setupError('$.patients.waiting', 'may contain at most six Patients.');
  const discard = Object.hasOwn(patientData, 'discard')
    ? setupCardList(patientData.discard, '$.patients.discard', patientCards, patientLocations)
    : [];
  const patientTop = Object.hasOwn(patientData, 'deckTop')
    ? setupCardList(patientData.deckTop, '$.patients.deckTop', patientCards, patientLocations)
    : [];
  const arrival = Object.hasOwn(patientData, 'arrival')
    ? setupCard(patientData.arrival, '$.patients.arrival', patientCards, patientLocations)
    : null;
  const admissionQueue = Object.hasOwn(patientData, 'admissionQueue')
    ? setupCardList(patientData.admissionQueue, '$.patients.admissionQueue', patientCards, patientLocations)
    : [];
  const dischargeQueue = Object.hasOwn(patientData, 'dischargeQueue')
    ? setupCardList(patientData.dischargeQueue, '$.patients.dischargeQueue', patientCards, patientLocations)
    : [];
  if (phase === 'discharge' && dischargeQueue.length === 0) setupError('$.patients.dischargeQueue', 'must not be empty during Discharge.');
  const patientRemaining = PATIENTS.filter((patient) => !patientLocations.has(patient.id)).map(clone);
  const patientDeck = [...shuffle(patientRemaining, random), ...patientTop.reverse()];

  const staffLocations = new Map();
  const staffData = setupObject(setup.staff, '$.staff', ['room', 'removed', 'deckTop'], ['room']);
  const staffCards = new Map(STAFF.map((staff) => [staff.id, staff]));
  const staffRoom = setupCardList(staffData.room, '$.staff.room', staffCards, staffLocations);
  if (staffRoom.length < 1 || staffRoom.length > 2) setupError('$.staff.room', 'must contain one or two Staff cards.');
  const removedWasSupplied = Object.hasOwn(staffData, 'removed');
  let removed = removedWasSupplied
    ? setupCardList(staffData.removed, '$.staff.removed', staffCards, staffLocations)
    : [];
  if (removedWasSupplied && removed.length !== 1) setupError('$.staff.removed', 'must contain exactly one initially removed Staff card.');
  const staffTop = Object.hasOwn(staffData, 'deckTop')
    ? setupCardList(staffData.deckTop, '$.staff.deckTop', staffCards, staffLocations)
    : [];
  if (!removedWasSupplied) {
    const candidates = STAFF.filter((staff) => !staffLocations.has(staff.id));
    if (candidates.length === 0) setupError('$.staff.removed', 'no unused Staff card is available for the initial removal.');
    const selected = candidates[Math.floor(random() * candidates.length)];
    staffLocations.set(selected.id, '$.staff.removed (selected by setup seed)');
    removed = [clone(selected)];
  }
  const staffRemaining = STAFF.filter((staff) => !staffLocations.has(staff.id)).map(clone);
  const staffDeck = [...shuffle(staffRemaining, random), ...staffTop.reverse()];

  const wearData = Object.hasOwn(setup, 'wear')
    ? setupObject(setup.wear, '$.wear', ['R', 'Y', 'B'])
    : {};
  const wear = { R: 2, Y: 2, B: 2 };
  for (const color of Object.keys(wearData)) {
    if (!Number.isInteger(wearData[color]) || wearData[color] < 1 || wearData[color] > 7) setupError(`$.wear.${color}`, 'expected an integer from 1 through 7.');
    wear[color] = wearData[color];
  }

  const diagnosis = calculateDiagnosis(waiting);
  const cubeData = Object.hasOwn(setup, 'cubes')
    ? setupObject(setup.cubes, '$.cubes', ['placed', 'supply'])
    : {};
  const placed = Object.hasOwn(cubeData, 'placed') ? setupArray(cubeData.placed, '$.cubes.placed') : [];
  const cubes = {};
  for (const [index, entry] of placed.entries()) {
    const path = `$.cubes.placed[${index}]`;
    if (typeof entry !== 'string') setupError(path, 'expected a PatientID:Zone string.');
    const parts = entry.split(':');
    if (parts.length !== 2 || !patientCards.has(parts[0]) || !ZONES.includes(parts[1])) setupError(path, 'expected a known PatientID followed by C, TL, ML, BL, TR, MR, or BR.');
    const [patientId, zone] = parts;
    if (!waiting.some((patient) => patient.id === patientId)) setupError(path, `${patientId} is not in the Waiting Room.`);
    if (!diagnosis[patientId]?.[zone]?.active) setupError(path, `${patientId}:${zone} is not an active ailment in this Diagnosis.`);
    const key = cubeKey(patientId, zone);
    if (cubes[key]) setupError(path, `${entry} is listed more than once.`);
    cubes[key] = true;
  }
  const treatmentCubes = Object.hasOwn(cubeData, 'supply') ? cubeData.supply : 7 - placed.length;
  if (!Number.isInteger(treatmentCubes) || treatmentCubes < 0 || treatmentCubes + placed.length > 7) setupError('$.cubes.supply', 'supply must be a nonnegative integer and supply plus placed cubes may not exceed seven.');

  const dicePresent = Object.hasOwn(setup, 'dice');
  if (phase === 'work' && !dicePresent) setupError('$.dice', 'required during Work.');
  const diceData = dicePresent
    ? setupObject(setup.dice, '$.dice', ['pool', 'upgraded', 'values', 'assignments'])
    : {};
  if (phase !== 'work' && (Object.hasOwn(diceData, 'values') || Object.hasOwn(diceData, 'assignments'))) setupError('$.dice', 'values and assignments are only valid during Work.');
  const pool = Object.hasOwn(diceData, 'pool') ? setupArray(diceData.pool, '$.dice.pool') : ['R1', 'Y1', 'B1'];
  const upgradedValues = Object.hasOwn(diceData, 'upgraded') ? setupArray(diceData.upgraded, '$.dice.upgraded') : [];
  const upgraded = new Set();
  for (const [index, color] of upgradedValues.entries()) {
    if (typeof color !== 'string' || !Object.hasOwn(COLORS, color)) setupError(`$.dice.upgraded[${index}]`, 'expected R, Y, or B.');
    if (upgraded.has(color)) setupError(`$.dice.upgraded[${index}]`, `${color} is listed more than once.`);
    upgraded.add(color);
  }
  const poolIds = new Set();
  const dicePool = pool.map((id, index) => {
    const path = `$.dice.pool[${index}]`;
    if (typeof id !== 'string' || !/^[RYB][12]$/.test(id)) setupError(path, 'expected a die ID such as R1 or B2.');
    if (poolIds.has(id)) setupError(path, `${id} is listed more than once.`);
    poolIds.add(id);
    const color = id[0];
    if (id[1] === '2' && !upgraded.has(color)) setupError(path, `${id} requires ${color} in dice.upgraded.`);
    return { id, color };
  });
  for (const id of ['R1', 'Y1', 'B1']) {
    if (!poolIds.has(id)) setupError('$.dice.pool', `must include ${id}.`);
  }
  if (poolIds.size > 6) setupError('$.dice.pool', 'may contain at most one second die of each color.');

  let values = {};
  let assignments = [];
  if (phase === 'work') {
    const valuesData = setupObject(diceData.values, '$.dice.values', [...poolIds], [...poolIds]);
    for (const id of Object.keys(valuesData)) {
      if (!Number.isInteger(valuesData[id]) || valuesData[id] < 1 || valuesData[id] > 6) setupError(`$.dice.values.${id}`, 'expected an integer from 1 through 6.');
      values[id] = valuesData[id];
    }
    assignments = Object.hasOwn(diceData, 'assignments') ? setupArray(diceData.assignments, '$.dice.assignments') : [];
  }

  const candidateState = createInitialState(seed);
  candidateState.round = round;
  candidateState.phase = phase;
  candidateState.patientDeck = patientDeck;
  candidateState.staffDeck = staffDeck;
  candidateState.waiting = waiting;
  candidateState.discard = discard;
  candidateState.staffRoom = staffRoom;
  candidateState.staffOffer = [];
  candidateState.dicePool = dicePool;
  candidateState.wear = wear;
  candidateState.treatmentCubes = treatmentCubes;
  candidateState.cubes = cubes;
  candidateState.diagnosis = diagnosis;
  candidateState.admissionCard = arrival;
  candidateState.admissionQueue = admissionQueue;
  candidateState.dischargeQueue = dischargeQueue;
  candidateState.curedThisRound = [...dischargeQueue];
  candidateState.upgradeUsed = { R: upgraded.has('R'), Y: upgraded.has('Y'), B: upgraded.has('B') };
  if (phase === 'work') {
    candidateState.rolledDice = dicePool.map((die) => ({ ...die, value: values[die.id], status: 'available' }));
    const assignedDice = new Set();
    const usedStaff = new Set();
    const treatmentTargets = new Set();
    let maintenanceCount = 0;
    let upgradeCount = 0;
    for (const [index, assignment] of assignments.entries()) {
      const path = `$.dice.assignments[${index}]`;
      if (!assignment || typeof assignment !== 'object' || Array.isArray(assignment)) setupError(path, 'expected an object.');
      if (typeof assignment.kind !== 'string') setupError(`${path}.kind`, 'required field is missing or invalid.');
      const allowed = assignment.kind === 'treatment'
        ? ['die', 'kind', 'patient', 'zone']
        : assignment.kind === 'staff'
          ? ['die', 'kind', 'staff']
          : assignment.kind === 'maintenance' || assignment.kind === 'upgrade'
            ? ['die', 'kind']
            : null;
      if (!allowed) setupError(`${path}.kind`, 'expected treatment, staff, maintenance, or upgrade.');
      for (const key of Object.keys(assignment)) if (!allowed.includes(key)) setupError(`${path}.${key}`, 'field is not valid for this assignment kind.');
      for (const key of allowed) if (!Object.hasOwn(assignment, key)) setupError(`${path}.${key}`, 'required field is missing.');
      if (typeof assignment.die !== 'string' || !poolIds.has(assignment.die)) setupError(`${path}.die`, `unknown die ID ${JSON.stringify(assignment.die)}.`);
      if (assignedDice.has(assignment.die)) setupError(`${path}.die`, `${assignment.die} is already assigned.`);
      assignedDice.add(assignment.die);
      const die = candidateState.rolledDice.find((item) => item.id === assignment.die);
      if (assignment.kind === 'treatment') {
        const patient = waiting.find((item) => item.id === assignment.patient);
        if (!patient) setupError(`${path}.patient`, `${JSON.stringify(assignment.patient)} is not in the Waiting Room.`);
        if (typeof assignment.zone !== 'string' || !ZONES.includes(assignment.zone)) setupError(`${path}.zone`, 'expected C, TL, ML, BL, TR, MR, or BR.');
        const info = diagnosis[patient.id][assignment.zone];
        if (!info.active) setupError(path, `${patient.id}:${assignment.zone} is not an active ailment.`);
        const destination = cubeKey(patient.id, assignment.zone);
        if (cubes[destination]) setupError(path, `${destination} already has a Treatment Cube.`);
        if (treatmentTargets.has(destination)) setupError(path, `${destination} is assigned more than once.`);
        if (die.color !== patient.colors[assignment.zone]) setupError(`${path}.die`, `${assignment.die} does not match the ${patient.id}:${assignment.zone} color.`);
        if (info.range && (die.value < info.range[0] || die.value > info.range[1])) setupError(`${path}.die`, `${assignment.die} value ${die.value} is outside the neighbor range ${info.range[0]}-${info.range[1]}.`);
        treatmentTargets.add(destination);
        candidateState.treatments.push({ dieId: die.id, patientId: patient.id, zone: assignment.zone });
        die.status = 'treatment';
      } else if (assignment.kind === 'staff') {
        const staff = staffRoom.find((item) => item.id === assignment.staff);
        if (!staff) setupError(`${path}.staff`, `${JSON.stringify(assignment.staff)} is not in the Staff Room.`);
        if (usedStaff.has(staff.id)) setupError(`${path}.staff`, `${staff.id} is already assigned.`);
        usedStaff.add(staff.id);
        candidateState.staffUsed.push(staff.id);
        die.status = 'staff';
      } else if (assignment.kind === 'maintenance') {
        maintenanceCount += 1;
        if (maintenanceCount > 1) setupError(path, 'only one Maintenance action may be assigned.');
        candidateState.maintenance = { dieId: die.id, color: die.color };
        die.status = 'maintenance';
      } else {
        upgradeCount += 1;
        if (upgradeCount > 1) setupError(path, 'only one Upgrade action may be assigned.');
        if (!upgraded.has(die.color)) setupError(path, `${die.color} must be listed in dice.upgraded for an Upgrade assignment.`);
        if (poolIds.has(`${die.color}2`)) setupError(`${path}.die`, `${die.color} already has its second die and cannot be upgraded again.`);
        candidateState.upgrade = { dieId: die.id, color: die.color };
        candidateState.upgradeUsed[die.color] = true;
        die.status = 'upgrade';
      }
    }
    for (const color of upgraded) {
      if (!poolIds.has(`${color}2`) && candidateState.upgrade?.color !== color) {
        setupError('$.dice.upgraded', `${color} requires ${color}2 in the pool or a current Upgrade assignment.`);
      }
    }
  }
  if (phase !== 'work') {
    for (const color of upgraded) {
      if (!poolIds.has(`${color}2`)) setupError('$.dice.upgraded', `${color} requires ${color}2 in the pool outside Work.`);
    }
  }
  candidateState.message = phase === 'admission'
    ? 'A new patient is arriving. Choose an end of the waiting room.'
    : phase === 'diagnosis'
      ? 'Diagnosis is complete. Keep active cubes or return some, then start work.'
      : phase === 'work'
        ? 'Select a die. Then click a highlighted Staff card, equipment action, or ailment.'
        : 'Choose whose Thank You to resolve first.';
  return { state: candidateState, random };
}

function parseSetupJSON(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    setupError('$', `invalid JSON: ${error.message}`);
  }
  return buildSetupCandidate(data);
}

function installSetupJSON(text) {
  const candidate = parseSetupJSON(text);
  state = candidate.state;
  gameRandom = candidate.random;
  selectedDieId = null;
  showLegalZones = false;
  clearThankYouDragState();
  $('.nurse-drag-ghost')?.remove();
  $('.admission-drag-ghost')?.remove();
  document.body.classList.remove('nurse-dragging', 'admission-dragging');
  return state;
}

function openNewGameDialog() {
  $('#new-game-error').textContent = '';
  $('#seed-input').value = '';
  $('#new-game-dialog').showModal();
}

function openLoadSetupDialog() {
  $('#setup-load-error').textContent = '';
  $('#setup-file-input').value = '';
  $('#load-setup-dialog').showModal();
}

function closeDialog(id) {
  const dialog = $(`#${id}`);
  if (dialog.open) dialog.close();
}

function startNewGameWithEnteredSeed() {
  const input = $('#seed-input').value.trim();
  const error = $('#new-game-error');
  if (!/^\d+$/.test(input)) {
    error.textContent = 'Enter a decimal integer from 0 through 4294967295.';
    return;
  }
  const seed = Number(input);
  if (!Number.isSafeInteger(seed) || seed > 4294967295) {
    error.textContent = 'Enter a decimal integer from 0 through 4294967295.';
    return;
  }
  try {
    newGame(seed);
    closeDialog('new-game-dialog');
  } catch (cause) {
    error.textContent = cause.message;
  }
}

async function loadSetupFile(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) return;
  const error = $('#setup-load-error');
  error.textContent = '';
  try {
    installSetupJSON(await file.text());
    $('#show-legal-zones').checked = false;
    render();
    closeDialog('load-setup-dialog');
  } catch (cause) {
    error.textContent = cause.message;
  } finally {
    input.value = '';
  }
}

function configureSetupControls() {
  const setupMode = typeof window !== 'undefined'
    && new URLSearchParams(window.location.search).get('setup') === '1';
  $('#load-setup-button').hidden = !setupMode;
}

function logEvent(label, message) {
  if (!state) return;
  state.history.unshift({ label, message });
  state.history = state.history.slice(0, 12);
}

function drawPatient() { return state.patientDeck.pop() || null; }
function drawStaff() { return state.staffDeck.pop() || null; }

function beginRound() {
  if (state.status !== 'playing') return;
  state.round += 1;
  state.phase = 'admission';
  state.message = 'A new patient is arriving. Choose an end of the waiting room.';
  state.treatments = [];
  state.staffUsed = [];
  state.maintenance = null;
  state.upgrade = null;
  state.staffAction = null;
  state.pendingStaffActivation = null;
  state.pendingWorkAction = null;
  state.pendingTreatment = null;
  state.admissionPreviewIndex = null;
  state.admissionDragging = false;
  clearThankYouDragState();
  state.rearrangeOrder = [];
  state.patientDeckOrder = [];
  selectedDieId = null;
  if (state.nextDice.length) {
    for (const color of state.nextDice) {
      const nextId = `${color}${state.dicePool.filter((die) => die.color === color).length + 1}`;
      state.dicePool.push({ id: nextId, color });
    }
    logEvent('Funding', `${state.nextDice.map(colorName).join(', ')} dice join the pool.`);
    state.nextDice = [];
  }
  const needed = Math.min(state.patientDeck.length, state.waiting.length < 2 ? 2 - state.waiting.length : 1);
  state.admissionQueue = Array.from({ length: needed }, () => drawPatient()).filter(Boolean);
  nextAdmissionCard();
}

function nextAdmissionCard() {
  state.admissionCard = state.admissionQueue.shift() || null;
  if (!state.admissionCard) beginDiagnosis();
  render();
}

function isValidAdmissionIndex(index) {
  return index === 0 || index === state.waiting.length;
}

function previewAdmission(index) {
  if (!state.admissionCard || state.phase !== 'admission') return;
  const insertionIndex = Number(index);
  if (!Number.isInteger(insertionIndex) || !isValidAdmissionIndex(insertionIndex)) return;
  if (state.admissionPreviewIndex === insertionIndex) return;
  state.admissionPreviewIndex = insertionIndex;
  renderWaitingRoom();
  renderAdmissionSource();
  renderBanner();
}

function confirmAdmission() {
  const insertionIndex = state.admissionPreviewIndex;
  if (!state.admissionCard || !Number.isInteger(insertionIndex) || state.phase !== 'admission') return;
  state.waiting.splice(insertionIndex, 0, state.admissionCard);
  logEvent('Admission', `${state.admissionCard.name} enters the waiting room.`);
  state.admissionCard = null;
  state.admissionPreviewIndex = null;
  nextAdmissionCard();
}

function cancelAdmissionPreview() {
  if (state.phase !== 'admission') return;
  state.admissionPreviewIndex = null;
  renderWaitingRoom();
  renderBanner();
}

function calculateDiagnosis(waiting = state.waiting) {
  const diagnosis = {};
  waiting.forEach((patient, index) => {
    const zones = {};
    for (const zone of ZONES) zones[zone] = { active: zone === 'C', range: null };
    for (const [zone, neighborZone] of EDGE_PAIRS.left) {
      if (index > 0 && patient.colors[zone] === waiting[index - 1].colors[neighborZone]) {
        zones[zone] = { active: true, range: rangeFor(patient, zone, waiting[index - 1], neighborZone) };
      }
    }
    for (const [zone, neighborZone] of EDGE_PAIRS.right) {
      if (index < waiting.length - 1 && patient.colors[zone] === waiting[index + 1].colors[neighborZone]) {
        zones[zone] = { active: true, range: rangeFor(patient, zone, waiting[index + 1], neighborZone) };
      }
    }
    diagnosis[patient.id] = zones;
  });
  return diagnosis;
}

function refreshDiagnosis() {
  state.diagnosis = calculateDiagnosis();
  let released = 0;
  for (const key of Object.keys(state.cubes)) {
    const [patientId, zone] = key.split(':');
    if (!state.diagnosis[patientId]?.[zone]?.active) {
      delete state.cubes[key];
      state.treatmentCubes += 1;
      released += 1;
    }
  }
  return released;
}

function returnDiagnosisCube(patientId, zone) {
  if (state.phase !== 'diagnosis' || !state.diagnosis[patientId]?.[zone]?.active) return;
  const key = cubeKey(patientId, zone);
  if (!state.cubes[key]) return;
  delete state.cubes[key];
  state.treatmentCubes += 1;
  const patient = state.waiting.find((item) => item.id === patientId);
  state.message = `Treatment Cube returned from ${patient?.name || 'the Patient'} to supply.`;
  logEvent('Diagnosis', `${patient?.name || 'Patient'} returned a Treatment Cube to supply.`);
  render();
}

function rangeFor(patient, zone, neighbor, neighborZone) {
  const values = [patient.values[zone], neighbor.values[neighborZone]];
  return [Math.min(...values), Math.max(...values)];
}

function beginDiagnosis() {
  state.phase = 'diagnosis';
  const released = refreshDiagnosis();
  state.message = released ? `${released} cube${released === 1 ? '' : 's'} no longer sit on an active ailment.` : 'Diagnosis is complete. Keep active cubes or return some, then start work.';
  logEvent('Diagnosis', released ? `${released} inactive cube${released === 1 ? '' : 's'} returned to supply.` : 'All existing treatment cubes remain useful.');
  render();
}

function startWork() {
  if (state.phase !== 'diagnosis') return;
  state.phase = 'work';
  state.rolledDice = state.dicePool.map((die) => ({ ...die, value: rollDie(), status: 'available' }));
  state.message = 'Select a die. Then click a highlighted Staff card, equipment action, or ailment.';
  logEvent('Work', `Rolled ${state.rolledDice.map(dieLabel).join(', ')}.`);
  render();
}

function rollDie() { return Math.floor(gameRandom() * 6) + 1; }

function selectedDie() { return state.rolledDice.find((die) => die.id === selectedDieId); }
function availableDice() { return state.rolledDice.filter((die) => die.status === 'available'); }

function canUpgradeEquipment(color) {
  return Boolean(
    color
    && !state.upgrade
    && !state.upgradeUsed[color]
    && state.wear[color] + 2 <= 7,
  );
}

function canActivateStaff(staff, activatingDie) {
  if (state.phase !== 'work' || !staff || !activatingDie || activatingDie.status !== 'available') return false;
  const targets = availableDice().filter((die) => die.id !== activatingDie.id);
  if (staff.key === 'specialist') return targets.length > 0;
  if (staff.key === 'scheduler') {
    return targets.some((first, index) => targets.slice(index + 1).some((second) => first.color !== second.color));
  }
  if (staff.key === 'consultant') {
    return targets.some((increase) => increase.value < 6 && targets.some((decrease) => decrease.id !== increase.id && decrease.value > 1));
  }
  if (staff.key === 'nurse') {
    const sources = Object.keys(state.cubes).filter((key) => {
      const [patientId, zone] = key.split(':');
      return state.diagnosis[patientId]?.[zone]?.active;
    });
    return sources.some((source) => state.waiting.some((patient) => ZONES.some((zone) => {
      const key = cubeKey(patient.id, zone);
      return key !== source && state.diagnosis[patient.id]?.[zone]?.active && !state.cubes[key] && !treatmentAssigned(patient.id, zone);
    })));
  }
  return staff.key === 'labtech';
}

function selectDie(id) {
  if (state.phase !== 'work') return;
  if (state.staffAction) {
    if (state.staffAction.staff?.key !== 'nurse') handleStaffChoice(id);
    return;
  }
  const die = state.rolledDice.find((item) => item.id === id);
  if (!die || die.status !== 'available') return;
  selectedDieId = selectedDieId === id ? null : id;
  state.pendingStaffActivation = null;
  state.pendingWorkAction = null;
  state.pendingTreatment = null;
  render();
}

function previewMaintenance() {
  const die = selectedDie();
  if (state.phase !== 'work' || !die || die.status !== 'available' || state.maintenance || state.wear[die.color] <= 1) return;
  state.pendingStaffActivation = null;
  state.pendingTreatment = null;
  state.pendingWorkAction = { type: 'maintenance', dieId: die.id };
  state.message = `Preview: repair ${colorName(die.color)} equipment by one Wear.`;
  render();
}

function previewUpgrade() {
  const die = selectedDie();
  if (state.phase !== 'work' || !die || die.status !== 'available' || !canUpgradeEquipment(die.color)) return;
  state.pendingStaffActivation = null;
  state.pendingTreatment = null;
  state.pendingWorkAction = { type: 'upgrade', dieId: die.id };
  state.message = `Preview: upgrade ${colorName(die.color)} equipment and gain a die next day.`;
  render();
}

function confirmWorkAction() {
  const pending = state.pendingWorkAction;
  const die = pending && state.rolledDice.find((item) => item.id === pending.dieId);
  if (state.phase !== 'work' || !pending || state.pendingStaffActivation || !die || die.status !== 'available') return;
  if (pending.type === 'maintenance') {
    if (state.maintenance || state.wear[die.color] <= 1) return;
    state.maintenance = { dieId: die.id, color: die.color };
    die.status = 'maintenance';
    state.wear[die.color] -= 1;
    logEvent('Maintenance', `${colorName(die.color)} equipment repaired to Wear ${state.wear[die.color]}.`);
  } else if (pending.type === 'upgrade') {
    if (!canUpgradeEquipment(die.color)) return;
    state.upgrade = { dieId: die.id, color: die.color };
    state.upgradeUsed[die.color] = true;
    die.status = 'upgrade';
    state.wear[die.color] = Math.min(7, state.wear[die.color] + 2);
    logEvent('Upgrade', `${colorName(die.color)} equipment pushed to ${wearLabel(state.wear[die.color])}; a new die arrives next day.`);
  } else return;
  state.pendingWorkAction = null;
  selectedDieId = null;
  render();
}

function placeTreatment(patientId, zone) {
  const die = selectedDie();
  const patient = state.waiting.find((item) => item.id === patientId);
  if (!die || die.status !== 'available' || !patient || state.phase !== 'work' || !canTreat(die, patient, zone)) return;
  die.status = 'treatment';
  state.treatments.push({ dieId: die.id, patientId: patient.id, zone });
  selectedDieId = null;
  state.pendingStaffActivation = null;
  state.pendingWorkAction = null;
  state.pendingTreatment = null;
  state.message = `${dieLabel(die)} placed on ${patient.name}. Undo it on the ailment if needed.`;
  logEvent('Treatment', `${dieLabel(die)} assigned to ${patient.name}.`);
  render();
}

function canTreat(die, patient, zone) {
  const info = state.diagnosis[patient.id]?.[zone];
  if (!info?.active || state.cubes[cubeKey(patient.id, zone)] || treatmentAssigned(patient.id, zone)) return false;
  if (die.color !== patient.colors[zone] || die.value < state.wear[die.color]) return false;
  if (info.range && (die.value < info.range[0] || die.value > info.range[1])) return false;
  return true;
}

function treatmentAssigned(patientId, zone) {
  return state.treatments.some((treatment) => treatment.patientId === patientId && treatment.zone === zone);
}

function undoTreatment(patientId, zone) {
  if (state.phase !== 'work') return;
  const treatmentIndex = state.treatments.findIndex((treatment) => treatment.patientId === patientId && treatment.zone === zone);
  if (treatmentIndex < 0) return;
  const [treatment] = state.treatments.splice(treatmentIndex, 1);
  const die = state.rolledDice.find((item) => item.id === treatment.dieId);
  if (die) die.status = 'available';
  selectedDieId = null;
  state.pendingTreatment = null;
  state.message = 'Die returned to the dice tray. Choose another destination or leave it unassigned.';
  logEvent('Treatment', `${die ? dieLabel(die) : 'Die'} placement undone.`);
  render();
}

function previewStaff(staffId) {
  const die = selectedDie();
  const staff = state.staffRoom.find((item) => item.id === staffId);
  if (!die || !staff || state.staffUsed.includes(staffId) || !canActivateStaff(staff, die)) return;
  state.pendingWorkAction = null;
  state.pendingTreatment = null;
  state.pendingStaffActivation = { staffId, dieId: die.id };
  state.message = `Preview: ${staff.name} will use ${dieLabel(die)}. Confirm to open the staff action.`;
  render();
}

function activateStaff(staffId) {
  const die = selectedDie();
  const staff = state.staffRoom.find((item) => item.id === staffId);
  if (state.phase !== 'work' || !die || die.status !== 'available' || !staff || state.staffUsed.includes(staffId) || !canActivateStaff(staff, die)) return;
  state.pendingStaffActivation = null;
  state.staffUsed.push(staffId);
  die.status = 'staff';
  selectedDieId = null;
  if (staff.key === 'nurse') {
    state.staffAction = { type: 'nurse-source', staff, activatorDieId: die.id };
  } else if (staff.key === 'scheduler') {
    state.staffAction = { type: 'scheduler-first', staff, activatorDieId: die.id };
  } else if (staff.key === 'consultant') {
    state.staffAction = { type: 'consultant-increase', staff, activatorDieId: die.id };
  } else if (staff.key === 'labtech') {
    state.staffAction = { type: 'labtech-select', staff, activatorDieId: die.id, selectedDieIds: [] };
  } else {
    state.staffAction = { type: 'specialist-target', staff, activatorDieId: die.id };
  }
  state.message = `${staff.name} is ready. Choose a legal target in the prompt.`;
  render();
}

function handleStaffChoice(value) {
  const action = state.staffAction;
  if (!action) return;
  if (action.type === 'specialist-target') {
    if (!availableDice().some((die) => die.id === value)) return;
    action.targetDieId = value;
    action.type = 'specialist-value';
  } else if (action.type === 'specialist-value') {
    const die = state.rolledDice.find((item) => item.id === action.targetDieId);
    const newValue = Number(value);
    if (!die || !Number.isInteger(newValue) || newValue < 1 || newValue > 6) return;
    die.value = newValue;
    finishStaffAction(`${action.staff.name} set a die to ${die.value}.`);
    return;
  } else if (action.type === 'consultant-increase') {
    const increase = availableDice().find((die) => die.id === value);
    const hasDecreaseTarget = availableDice().some((die) => die.id !== value && die.value > 1);
    if (!increase || increase.value >= 6 || !hasDecreaseTarget) return;
    action.increaseDieId = value;
    action.type = 'consultant-decrease';
  } else if (action.type === 'consultant-decrease') {
    const increase = availableDice().find((die) => die.id === action.increaseDieId);
    const decrease = availableDice().find((die) => die.id === value);
    if (!increase || !decrease || decrease.id === increase.id || increase.value >= 6 || decrease.value <= 1) return;
    increase.value += 1;
    decrease.value -= 1;
    finishStaffAction(`${action.staff.name} increased one die to ${increase.value} and decreased another to ${decrease.value}.`);
    return;
  } else if (action.type === 'scheduler-first') {
    const die = state.rolledDice.find((item) => item.id === value);
    if (!die || die.status !== 'available') return;
    action.firstDieId = value;
    action.type = 'scheduler-second';
  } else if (action.type === 'scheduler-second') {
    const first = state.rolledDice.find((item) => item.id === action.firstDieId);
    const second = state.rolledDice.find((item) => item.id === value);
    if (!first || !second || second.id === first.id || second.status !== 'available' || second.color === first.color) return;
    [first.value, second.value] = [second.value, first.value];
    finishStaffAction(`${action.staff.name} swapped ${colorName(first.color)} and ${colorName(second.color)}.`);
    return;
  } else if (action.type === 'labtech-select') {
    if (!availableDice().some((die) => die.id === value)) return;
    const selected = new Set(action.selectedDieIds || []);
    if (selected.has(value)) selected.delete(value);
    else selected.add(value);
    action.selectedDieIds = [...selected];
    state.message = `${action.selectedDieIds.length} unassigned dice selected to reroll.`;
    render();
    return;
  } else if (action.type === 'nurse-source') {
    if (!state.cubes[value]) return;
    action.source = value;
    action.type = 'nurse-destination';
  } else if (action.type === 'nurse-destination') {
    const [patientId, zone] = String(value).split(':');
    if (!state.diagnosis[patientId]?.[zone]?.active || state.cubes[value] || treatmentAssigned(patientId, zone) || value === action.source) return;
    action.destination = value;
    state.message = `Preview: move a treatment cube to ${patientId} · ${zone}. Drag it again to try another ailment, or confirm the move.`;
    render();
    return;
  }
  render();
}

function finishStaffAction(message) {
  state.message = message;
  logEvent('Staff', message);
  state.staffAction = null;
  render();
}

function confirmLabTechReroll() {
  const action = state.staffAction;
  if (!action || action.staff?.key !== 'labtech' || action.type !== 'labtech-select') return;
  const selected = new Set(action.selectedDieIds || []);
  const dice = availableDice().filter((die) => selected.has(die.id));
  for (const die of dice) die.value = rollDie();
  finishStaffAction(`Lab Tech rerolled ${dice.length} unassigned die${dice.length === 1 ? '' : 's'}.`);
}

function cancelStaffAction() {
  if (!state.staffAction) return;
  const activatingStaff = state.staffAction.staff;
  const activatingDie = state.rolledDice.find((die) => die.id === state.staffAction.activatorDieId);
  state.staffAction = null;
  if (activatingStaff) state.staffUsed = state.staffUsed.filter((id) => id !== activatingStaff.id);
  if (activatingDie) activatingDie.status = 'available';
  state.nurseDragging = false;
  state.nurseDragPointerId = null;
  state.nurseDragSource = null;
  state.nurseDragTarget = null;
  state.nurseDragPreviousDestination = null;
  $('.nurse-drag-ghost')?.remove();
  document.body.classList.remove('nurse-dragging');
  state.message = 'Staff activation cancelled. The die and Staff card are available again.';
  logEvent('Staff', `${activatingStaff?.name || 'Staff'} activation cancelled.`);
  render();
}

function cancelPendingSelection() {
  state.pendingStaffActivation = null;
  state.pendingWorkAction = null;
  state.pendingTreatment = null;
  state.message = 'Selection cancelled. Nothing was assigned.';
  render();
}

function confirmStaffActivation() {
  const pending = state.pendingStaffActivation;
  if (!pending) return;
  const die = state.rolledDice.find((item) => item.id === pending.dieId);
  const staff = state.staffRoom.find((item) => item.id === pending.staffId);
  if (state.phase !== 'work' || !die || die.status !== 'available' || !staff || state.staffUsed.includes(staff.id) || !canActivateStaff(staff, die)) {
    state.pendingStaffActivation = null;
    selectedDieId = null;
    state.message = 'That Staff preview is no longer available. Select an unassigned die and try again.';
    render();
    return;
  }
  selectedDieId = pending.dieId;
  activateStaff(pending.staffId);
}

function confirmNurseMove() {
  const action = state.staffAction;
  if (!action || action.staff?.key !== 'nurse' || !action.source || !action.destination) return;
  const [patientId, zone] = String(action.destination).split(':');
  if (!state.cubes[action.source] || !state.diagnosis[patientId]?.[zone]?.active || state.cubes[action.destination] || treatmentAssigned(patientId, zone) || action.destination === action.source) {
    state.message = 'That Nurse preview is no longer available. Choose another active ailment.';
    render();
    return;
  }
  delete state.cubes[action.source];
  state.cubes[action.destination] = true;
  finishStaffAction(`${action.staff.name} moved a treatment cube.`);
}

function resolveWork() {
  if (state.phase !== 'work' || state.staffAction || state.pendingStaffActivation || state.pendingWorkAction || state.pendingTreatment) return;
  let lostTreatments = 0;
  for (const patient of state.waiting) {
    for (const treatment of state.treatments.filter((item) => item.patientId === patient.id)) {
      if (state.treatmentCubes > 0) {
        state.treatmentCubes -= 1;
        state.cubes[cubeKey(patient.id, treatment.zone)] = true;
      } else {
        lostTreatments += 1;
      }
      state.wear[patient.colors[treatment.zone]] = Math.min(7, state.wear[patient.colors[treatment.zone]] + 1);
    }
  }
  if (state.upgrade) state.dicePool.push({ id: `${state.upgrade.color}${state.dicePool.filter((die) => die.color === state.upgrade.color).length + 1}`, color: state.upgrade.color });
  state.phase = 'discharge';
  state.curedThisRound = state.waiting.filter((patient) => isCured(patient));
  for (const patient of state.curedThisRound) {
    for (const key of Object.keys(state.cubes)) {
      if (key.startsWith(`${patient.id}:`)) {
        delete state.cubes[key];
        state.treatmentCubes += 1;
      }
    }
  }
  const curedIds = new Set(state.curedThisRound.map((patient) => patient.id));
  state.waiting = state.waiting.filter((patient) => !curedIds.has(patient.id));
  state.dischargeQueue = [...state.curedThisRound];
  state.message = state.curedThisRound.length ? `${state.curedThisRound.length} patient${state.curedThisRound.length === 1 ? '' : 's'} left the Waiting Room. Choose whose Thank You to resolve first.` : 'No patient is ready to leave yet.';
  logEvent('Resolution', `${state.treatments.length - lostTreatments} treatment${state.treatments.length - lostTreatments === 1 ? '' : 's'} became cubes${lostTreatments ? `; ${lostTreatments} over-assignment${lostTreatments === 1 ? '' : 's'} had no cube` : ''}.`);
  if (state.dischargeQueue.length) render();
  else closingTime();
}

function isCured(patient) {
  return ZONES.every((zone) => !state.diagnosis[patient.id]?.[zone]?.active || state.cubes[cubeKey(patient.id, zone)]);
}

function clearThankYouDragState() {
  state.rearrangeDragging = false;
  state.rearrangeDragPointerId = null;
  state.rearrangeDragSourceId = null;
  state.rearrangeDragOriginOrder = null;
  state.rearrangeDragTargetIndex = null;
  state.patientDeckDragging = false;
  state.patientDeckDragPointerId = null;
  state.patientDeckDragSourceId = null;
  state.patientDeckDragOriginOrder = null;
  state.patientDeckDragTargetIndex = null;
  document.querySelectorAll('.thank-you-drag-ghost').forEach((ghost) => ghost.remove());
  document.body.classList.remove('rearrange-dragging', 'patient-deck-dragging');
}

function chooseDischarge(patientId) {
  if (state.phase !== 'discharge' || state.pendingThankYou) return;
  const index = state.dischargeQueue.findIndex((patient) => patient.id === patientId);
  if (index < 0) return;
  const [patient] = state.dischargeQueue.splice(index, 1);
  state.pendingThankYou = patient;
  state.rearrangeOrder = state.pendingThankYou?.thankYou === 'Waiting Room' ? state.waiting.map((patient) => patient.id) : [];
  state.patientDeckOrder = state.pendingThankYou?.thankYou === 'Patient Deck' ? patientDeckPreview().map((patient) => patient.id) : [];
  if (state.pendingThankYou?.thankYou === 'Hire') {
    const offer = drawStaff();
    state.pendingThankYou.staffOffer = offer;
    if (offer) {
      state.staffRoom.push(offer);
      logEvent('Hire', `${offer.name} was drawn from the Staff Deck and added to the Staff Room.`);
    } else {
      logEvent('Hire', 'The Staff Deck was empty; no staff card was added.');
    }
  }
  render();
}

function completePendingDischarge(skipped = false) {
  const patient = state.pendingThankYou;
  if (!patient) return;
  state.discard.push(patient);
  logEvent('Discharge', `${patient.name} left the hospital after their Thank You was ${skipped ? 'skipped' : 'resolved'}.`);
  state.pendingThankYou = null;
  clearThankYouDragState();
  state.rearrangeOrder = [];
  state.patientDeckOrder = [];
  if (state.dischargeQueue.length) {
    state.message = `Choose the next Patient whose Thank You you want to resolve.`;
    render();
  } else {
    closingTime();
  }
}

function skipThankYou() {
  completePendingDischarge(true);
}

function skipQueuedThankYou(patientId) {
  if (state.phase !== 'discharge' || state.pendingThankYou) return;
  const index = state.dischargeQueue.findIndex((patient) => patient.id === patientId);
  if (index < 0) return;
  [state.pendingThankYou] = state.dischargeQueue.splice(index, 1);
  skipThankYou();
}

function resolveThankYou() {
  completePendingDischarge();
}

function resetRearrangeOrder() {
  if (state.pendingThankYou?.thankYou !== 'Waiting Room') return;
  state.rearrangeOrder = state.waiting.map((patient) => patient.id);
  render();
}

function confirmRearrange() {
  if (state.pendingThankYou?.thankYou !== 'Waiting Room' || state.rearrangeOrder.length !== state.waiting.length) return;
  const ordered = state.rearrangeOrder.map((id) => state.waiting.find((patient) => patient.id === id));
  if (ordered.some((patient) => !patient)) return;
  state.waiting = ordered;
  logEvent('Thank You', 'Waiting Room rearranged. Matching ailments update immediately; cubes on inactive zones remain until the next Diagnosis.');
  resolveThankYou();
}

function patientDeckPreview() {
  return state.patientDeck.slice(-Math.min(3, state.patientDeck.length)).reverse();
}

function patientDeckOrderCards() {
  const preview = patientDeckPreview();
  const order = state.patientDeckOrder.length === preview.length ? state.patientDeckOrder : preview.map((patient) => patient.id);
  return order.map((id) => preview.find((patient) => patient.id === id)).filter(Boolean);
}

function resetPatientDeckOrder() {
  if (state.pendingThankYou?.thankYou !== 'Patient Deck') return;
  state.patientDeckOrder = patientDeckPreview().map((patient) => patient.id);
  render();
}

function confirmPatientDeck() {
  if (state.pendingThankYou?.thankYou !== 'Patient Deck') return;
  const preview = patientDeckOrderCards();
  if (!preview.length || preview.length !== patientDeckPreview().length) return;
  const ordered = preview;
  if (ordered.some((patient) => !patient)) return;
  state.patientDeck = [...state.patientDeck.slice(0, -preview.length), ...ordered.reverse()];
  logEvent('Thank You', `The top ${preview.length} Patient Deck card${preview.length === 1 ? '' : 's'} were rearranged.`);
  resolveThankYou();
}

function closingTime() {
  state.phase = 'closing';
  state.pendingThankYou = null;
  selectedDieId = null;
  if (state.waiting.length === 0 && state.patientDeck.length === 0) {
    state.status = 'won';
    state.message = 'Every patient has been discharged.';
    logEvent('Closing Time', 'You win.');
  } else if (state.waiting.length >= 6) {
    state.status = 'lost';
    state.message = 'The waiting room has six patients. The hospital is overcrowded.';
    logEvent('Closing Time', 'You lose: the waiting room is overcrowded.');
  } else if (state.patientDeck.length === 0) {
    if (state.treatmentCubes > 0) {
      state.treatmentCubes -= 1;
      logEvent('Closing Time', 'The empty deck costs one cube from supply.');
      state.message = 'The deck is empty. One spare treatment cube is spent to keep the doors open.';
    } else {
      state.status = 'lost';
      state.message = 'The deck is empty and there is no treatment cube left in supply.';
      logEvent('Closing Time', 'You lose: no cube remains in supply.');
    }
  } else {
    state.message = 'The shift is complete. Begin the next day when ready.';
  }
  render();
}

function chooseInitialStaff(id) {
  const chosen = state.staffOffer.find((staff) => staff.id === id);
  const rejected = state.staffOffer.find((staff) => staff.id !== id);
  if (!chosen) return;
  state.staffRoom = [chosen];
  state.staffOffer = [];
  logEvent('Setup', `${chosen.name} joins the Staff Room.${rejected ? ` ${rejected.name} is removed from this game.` : ''}`);
  beginRound();
}

function discardHiredStaff(staffId) {
  if (state.pendingThankYou?.thankYou !== 'Hire' || state.staffRoom.length <= 2) return;
  const index = state.staffRoom.findIndex((staff) => staff.id === staffId);
  if (index < 0) return;
  const [discarded] = state.staffRoom.splice(index, 1);
  logEvent('Hire', `${discarded.name} was removed from this game.`);
  render();
}

function confirmHireStaff() {
  if (state.pendingThankYou?.thankYou !== 'Hire' || state.staffRoom.length > 2) return;
  resolveThankYou();
}

function wearLabel(value) { return value >= 7 ? 'Out of Order' : `Wear ${value}`; }

function render() {
  if (!state) return;
  document.body.dataset.status = state.status;
  $('#seed-value').textContent = String(state.seed);
  $('#round-badge').textContent = state.status === 'won' ? 'Victory' : state.status === 'lost' ? 'Shift lost' : state.round ? `Day ${state.round}` : 'Setup';
  $('#discharged-count').textContent = `Patients Discharged: ${state.discard.length}`;
  $('#patient-deck-count').textContent = `${state.patientDeck.length} left`;
  $('.patient-deck-card').classList.toggle('empty', state.patientDeck.length === 0);
  $('#patient-deck-label').textContent = state.patientDeck.length ? 'face down' : 'empty';
  $('#discard-count').textContent = state.discard.length;
  $('#staff-count').textContent = `${state.staffRoom.length} / 2`;
  $('#staff-deck-count').textContent = state.staffDeck.length;
  $('#queue-count').textContent = state.waiting.length;
  $('#dice-count').textContent = state.phase === 'work' ? state.rolledDice.length : state.dicePool.length;
  $('#cube-count').textContent = state.treatmentCubes;
  renderStepper();
  renderStaffRoom();
  renderAdmissionSource();
  renderWaitingRoom();
  syncPhysicalCardScale();
  renderDiceTray();
  renderEquipment();
  renderLog();
  renderPrimaryAction();
  renderBanner();
}

function syncPhysicalCardScale() {
  const patientCard = $('#waiting-room .patient-card');
  const board = document.querySelector('.board');
  if (!patientCard || !board) return;
  board.style.setProperty('--physical-card-width', `${patientCard.getBoundingClientRect().width}px`);
  board.style.setProperty('--physical-card-height', `${patientCard.getBoundingClientRect().height}px`);
}

function renderStepper() {
  const phases = ['admission', 'diagnosis', 'work', 'discharge', 'closing'];
  const activeIndex = phases.indexOf(state.phase);
  document.querySelectorAll('[data-step]').forEach((item) => {
    const index = phases.indexOf(item.dataset.step);
    item.classList.toggle('active', index === activeIndex);
    item.classList.toggle('complete', index < activeIndex || state.status === 'won');
  });
}

function renderPrimaryAction() {
  const target = $('#primary-action');
  let button = '';
  if (state.status === 'won' || state.status === 'lost') button = '<button class="button button-primary" data-action="new-game">Start a fresh shift</button>';
  else if (state.phase === 'diagnosis') button = '<button class="button button-primary" data-action="start-work">Roll dice &amp; work</button>';
  else if (state.phase === 'work') button = '<button class="button button-primary" data-action="resolve-work"' + (state.staffAction || state.pendingStaffActivation || state.pendingWorkAction || state.pendingTreatment ? ' disabled' : '') + '>Resolve the work day</button>';
  else if (state.phase === 'closing') button = '<button class="button button-primary" data-action="next-day">Begin next day</button>';
  target.innerHTML = button;
}

function renderBanner() {
  const banner = $('#table-banner');
  if (state.phase === 'setup') {
    banner.innerHTML = '<div class="banner"><span><strong>Setup:</strong> choose a Staff card.</span></div>';
  } else if (state.phase === 'admission' && state.admissionCard) {
    banner.innerHTML = '<div class="banner"><strong>Admission</strong></div>';
  } else if (state.phase === 'diagnosis') {
    const diagnosisText = Object.keys(state.cubes).length
      ? 'Click any active Treatment Cube to return it to supply, or keep it and begin Work.'
      : 'No treatment cubes to return, continue to roll &amp; work.';
    banner.innerHTML = `<div class="banner"><span><strong>Diagnosis:</strong> ${diagnosisText}</span></div>`;
  } else if (state.phase === 'work') {
    let workText = `<span><strong>Work:</strong> ${availableDice().length} unassigned dice remain. Select a die, then choose one destination.</span>`;
    let workAction = `<span>${state.treatments.length} treatment${state.treatments.length === 1 ? '' : 's'} planned</span>`;
    if (state.staffAction?.staff?.key === 'nurse') {
      workText = state.nurseDragging
        ? '<span><strong>Nurse:</strong> drag the cube onto an empty active ailment.</span>'
        : state.staffAction.type === 'nurse-source'
          ? '<span><strong>Nurse:</strong> drag a treatment cube to move it.</span>'
          : state.staffAction.destination
            ? '<span><strong>Nurse:</strong> move previewed. Try another active ailment or confirm.</span>'
            : '<span><strong>Nurse:</strong> drag the selected cube onto an empty active ailment.</span>';
      workAction = state.staffAction.destination
        ? '<div class="banner-actions"><button class="button button-primary button-small" data-action="confirm-nurse">Confirm move</button><button class="button button-quiet button-small" data-action="cancel-staff">Cancel</button></div>'
        : '<button class="button button-quiet button-small" data-action="cancel-staff">Cancel</button>';
    } else if (state.staffAction) {
      const action = state.staffAction;
      const staffName = escapeHtml(action.staff?.name || 'Staff');
      const targetDie = action.targetDieId ? state.rolledDice.find((die) => die.id === action.targetDieId) : null;
      const cancel = '<button class="button button-quiet button-small" data-action="cancel-staff">Cancel</button>';
      if (action.type === 'scheduler-first') {
        workText = `<span><strong>${staffName}:</strong> choose the first available die in the dice tray.</span>`;
        workAction = cancel;
      } else if (action.type === 'scheduler-second') {
        workText = `<span><strong>${staffName}:</strong> choose a different-colored second die; their values will swap.</span>`;
        workAction = cancel;
      } else if (action.type === 'consultant-increase') {
        workText = `<span><strong>${staffName}:</strong> choose an unassigned die to increase by 1.</span>`;
        workAction = cancel;
      } else if (action.type === 'consultant-decrease') {
        const increaseDie = state.rolledDice.find((die) => die.id === action.increaseDieId);
        workText = `<span><strong>${staffName}:</strong> choose a different unassigned die to decrease by 1.${increaseDie ? ` ${escapeHtml(dieLabel(increaseDie))} will increase.` : ''}</span>`;
        workAction = cancel;
      } else if (action.type === 'specialist-target') {
        workText = `<span><strong>${staffName}:</strong> choose an available die to set.</span>`;
        workAction = cancel;
      } else if (action.type === 'specialist-value') {
        workText = `<span><strong>${staffName}:</strong> choose a new value for ${escapeHtml(targetDie ? dieLabel(targetDie) : 'the selected die')}.</span>`;
        workAction = `<div class="banner-actions">${[1, 2, 3, 4, 5, 6].map((value) => `<button class="button button-quiet button-small" data-action="staff-choice" data-value="${value}">${value}</button>`).join('')}${cancel}</div>`;
      } else if (action.type === 'labtech-select') {
        const selectedCount = (action.selectedDieIds || []).length;
        workText = `<span><strong>${staffName}:</strong> choose any number of unassigned dice to reroll.</span>`;
        workAction = `<div class="banner-actions"><button class="button button-primary button-small" data-action="confirm-labtech">Reroll ${selectedCount} die${selectedCount === 1 ? '' : 's'}</button>${cancel}</div>`;
      }
    } else if (state.pendingStaffActivation) {
      const staff = state.staffRoom.find((item) => item.id === state.pendingStaffActivation.staffId);
      workText = `<span><strong>Preview:</strong> use ${escapeHtml(staff?.name || 'Staff')} with the selected die.</span>`;
      workAction = '';
    } else if (state.pendingWorkAction) {
      const die = state.rolledDice.find((item) => item.id === state.pendingWorkAction.dieId);
      workText = `<span><strong>Preview:</strong> ${state.pendingWorkAction.type === 'maintenance' ? 'repair' : 'upgrade'} ${colorName(die?.color)} equipment.</span>`;
      workAction = '';
    } else if (state.pendingTreatment) {
      const patient = state.waiting.find((item) => item.id === state.pendingTreatment.patientId);
      workText = `<span><strong>Preview:</strong> treat ${escapeHtml(patient?.name || 'patient')} with the selected die.</span>`;
      workAction = '';
    }
    banner.innerHTML = `<div class="banner">${workText}${workAction}</div>`;
  } else if (state.phase === 'discharge') {
    banner.innerHTML = state.pendingThankYou
      ? renderThankYouBanner()
      : `<div class="banner"><span><strong>Discharge:</strong> ${state.dischargeQueue.length ? 'All cured Patients have left the Waiting Room. Choose whose Thank You to resolve next.' : 'No one is cured today.'}</span></div>`;
  } else if (state.status === 'won') banner.innerHTML = '<div class="banner win"><strong>Victory — every patient has gone home.</strong></div>';
  else if (state.status === 'lost') banner.innerHTML = '<div class="banner loss"><strong>Shift lost — the hospital could not keep up.</strong></div>';
  else if (state.phase === 'closing') banner.innerHTML = `<div class="banner warn"><span><strong>Closing time:</strong> ${escapeHtml(state.message)}</span></div>`;
  else banner.innerHTML = '';
}

function renderThankYouBanner() {
  const patient = state.pendingThankYou;
  const notePatient = escapeHtml(patient.name);
  const skip = '<button class="button button-quiet button-small" data-action="skip-thank-you">Skip</button>';
  if (patient.thankYou === 'Waiting Room') {
    return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} lets you rearrange.</span></div>`;
  }
  if (patient.thankYou === 'Repair') {
    return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} can reduce one equipment type’s Wear by 2.</span></div>`;
  }
  if (patient.thankYou === 'Patient Deck') {
    const preview = patientDeckPreview();
    if (!preview.length) return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} has no Patient Deck cards left to rearrange.</span><div class="banner-actions">${skip}</div></div>`;
    return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} lets you look at and rearrange the top ${preview.length} Patient Deck cards below the Waiting Room. Drag them into order: left is top, right is bottom.</span></div>`;
  }
  if (patient.thankYou === 'Hire') {
    const offer = patient.staffOffer;
    const detail = offer
      ? `${escapeHtml(offer.name)} was added to the Staff Room.${state.staffRoom.length > 2 ? ' Remove one Staff card from the game below.' : ''}`
      : 'The Staff Deck was empty.';
    return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} lets you hire staff. ${detail}</span></div>`;
  }
  return `<div class="banner"><span><strong>Thank You:</strong> ${notePatient} has no available action.</span></div>`;
}

function renderStaffRoom() {
  const target = $('#staff-room');
  const hirePending = state.phase === 'discharge' && state.pendingThankYou?.thankYou === 'Hire';
  const overCapacity = hirePending && state.staffRoom.length > 2;
  $('.right-resources')?.classList.toggle('hire-over-capacity-hidden', overCapacity);
  if (state.phase === 'setup' && state.staffOffer.length) {
    const offer = state.staffOffer.map((staff) => `<div class="staff-mini offer-select" data-action="choose-initial-staff" data-value="${staff.id}" title="Choose ${escapeHtml(staff.name)}"><img src="${cardAsset(staff.image)}" alt="${escapeHtml(staff.name)}" /></div>`).join('');
    target.classList.remove('hire-pending');
    target.innerHTML = `<div class="staff-offer-cards">${offer}</div>`;
    return;
  }
  const room = state.staffRoom.length ? state.staffRoom.map((staff) => {
    const pending = state.pendingStaffActivation?.staffId === staff.id;
    const die = selectedDie();
    const used = state.staffUsed.includes(staff.id);
    const canUseSelectedDie = Boolean(die && !used && canActivateStaff(staff, die));
    const unavailable = Boolean(die && !used && !canUseSelectedDie);
    const action = canUseSelectedDie || pending ? `data-action="preview-staff" data-value="${staff.id}"` : '';
    const card = `<div class="staff-mini ${used ? 'used' : ''} ${canUseSelectedDie ? 'selectable' : ''} ${unavailable ? 'unavailable' : ''} ${pending ? 'pending' : ''}" ${action} title="${escapeHtml(staff.name)}: ${escapeHtml(staff.ability)}"><img src="${cardAsset(staff.image)}" alt="${escapeHtml(staff.name)}" />${used ? '<span class="used-label">used</span>' : ''}</div>`;
    const actions = pending ? '<div class="local-actions"><button class="button button-primary button-small" data-action="confirm-staff">Confirm</button><button class="button button-quiet button-small" data-action="cancel-selection">Cancel</button></div>' : '';
    const discardAction = overCapacity ? `<div class="local-actions hire-discard-actions"><button class="button button-quiet button-small" data-action="discard-hire-staff" data-value="${staff.id}">Remove from game</button></div>` : '';
    return `<div class="staff-card-choice">${card}${actions}${discardAction}</div>`;
  }).join('') : '<span class="muted">No staff yet</span>';
  const continueAction = hirePending && state.staffRoom.length <= 2
    ? '<div class="staff-room-continue"><button class="button button-primary button-small" data-action="confirm-hire-staff">Continue</button></div>'
    : '';
  target.classList.toggle('hire-pending', hirePending);
  target.innerHTML = `<div class="staff-room-cards">${room}</div>${continueAction}`;
}

function renderAdmissionSource() {
  const source = $('#admission-source');
  if (!source) return;
  if (state.phase !== 'admission' || !state.admissionCard || state.admissionDragging || Number.isInteger(state.admissionPreviewIndex)) {
    source.innerHTML = '';
    return;
  }
  source.innerHTML = `<div class="admission-drawn-card" data-admission-drag="true"><img draggable="false" src="${cardAsset(state.admissionCard.image)}" alt="${escapeHtml(state.admissionCard.name)}" /></div>`;
}

function zonePosition(zone) {
  return ZONE_LAYOUT[zone];
}

function renderPatientCard(patient, index, variant = 'normal', diagnosisState = state.diagnosis) {
  const diagnosis = diagnosisState[patient.id] || {};
  const rearrangeMode = variant === 'normal' && state.pendingThankYou?.thankYou === 'Waiting Room';
  const interactive = state.phase === 'work' && selectedDie() && ZONES.some((zone) => canTreat(selectedDie(), patient, zone));
  const zones = ZONES.map((zone) => {
    const info = diagnosis[zone] || { active: false };
    const key = cubeKey(patient.id, zone);
    const actualHasCube = Boolean(state.cubes[key]);
    if (!info.active && !actualHasCube) return '';
    const zoneStateClass = info.active ? 'active' : 'inactive-cube';
    const assignment = state.treatments.find((treatment) => treatment.patientId === patient.id && treatment.zone === zone);
    const nurseMode = state.phase === 'work' && state.staffAction?.staff?.key === 'nurse';
    const nursePreview = nurseMode ? state.staffAction.destination : null;
    const hasCube = nursePreview
      ? key === nursePreview || (actualHasCube && key !== state.staffAction.source)
      : actualHasCube;
    const nurseSource = nurseMode && hasCube && (
      state.staffAction.type === 'nurse-source'
      || key === state.staffAction.source
      || key === state.staffAction.destination
    );
    const nurseDestination = nurseMode && state.staffAction.type === 'nurse-destination'
      && key !== state.staffAction.source
      && key !== state.staffAction.destination
      && !hasCube
      && !treatmentAssigned(patient.id, zone);
    const nurseOver = nurseDestination && state.nurseDragTarget === key;
    const die = selectedDie();
    const treatable = state.phase === 'work' && die && canTreat(die, patient, zone);
    const canReturnCube = state.phase === 'diagnosis' && actualHasCube;
    const legalDice = state.phase === 'work' ? availableDice().filter((availableDie) => canTreat(availableDie, patient, zone)) : [];
    const legalPreview = showLegalZones && legalDice.length > 0;
    const undoable = state.phase === 'work' && Boolean(assignment);
    const label = info.range ? `${info.range[0]}–${info.range[1]}` : info.active ? 'active' : 'inactive';
    const printedValue = patient.values[zone] || 'any';
    const action = undoable ? 'undo-treatment' : canReturnCube ? 'return-cube' : treatable ? 'place-treatment' : '';
    const actionAttributes = action ? `data-action="${action}" data-patient="${patient.id}" data-zone="${zone}"` : '';
    const nurseAttributes = nurseSource
      ? `data-nurse-source="${key}"`
      : nurseDestination
        ? `data-nurse-destination="${key}"`
        : '';
    const assignmentDie = assignment && state.rolledDice.find((die) => die.id === assignment.dieId);
    const assignmentLabel = assignmentDie ? `${dieLabel(assignmentDie)} placed · click to undo` : 'Treatment die placed · click to undo';
    const legalLabel = legalDice.length ? ` · legal with ${legalDice.map(dieLabel).join(', ')}` : '';
    const cubeLabel = hasCube ? ' · treatment cube placed' : '';
    const title = nurseSource
      ? 'Drag this treatment cube to another active ailment'
      : nurseDestination
        ? 'Drop the treatment cube here'
        : canReturnCube
          ? 'Click to return this Treatment Cube to supply'
        : undoable
          ? assignmentLabel
          : `${colorName(patient.colors[zone])} ${printedValue} · ${label}${cubeLabel}${legalPreview ? legalLabel : ''}`;
    const assignmentVisual = assignmentDie ? `<span class="assignment-die assigned-${assignmentDie.color.toLowerCase()}" aria-hidden="true">${assignmentDie.value}</span><span class="assignment-undo-glyph" aria-hidden="true">↶</span>` : '';
    const position = zonePosition(zone);
    const positionStyle = `--zone-center-x:${position.center.x}%;--zone-center-y:${position.center.y}%;--zone-size-width:${position.size.width}%;--zone-size-height:${position.size.height}%;--zone-radius:${position.radius}%;`;
    return `<button class="zone-button zone-${patient.colors[zone].toLowerCase()} ${zone.toLowerCase()} ${zoneStateClass} ${treatable ? 'treatable' : ''} ${canReturnCube ? 'returnable' : ''} ${legalPreview ? 'legal-preview' : ''} ${hasCube ? 'has-cube' : ''} ${assignment ? 'has-assignment' : ''} ${undoable ? 'undoable' : ''} ${nurseSource ? 'nurse-source' : ''} ${nurseDestination ? 'nurse-destination' : ''} ${nurseOver ? 'nurse-over' : ''}" style="${positionStyle}" ${actionAttributes} ${nurseAttributes} title="${title}" aria-label="${escapeHtml(patient.name)} ${zone}${cubeLabel}${canReturnCube ? ' click to return cube to supply' : ''}${nurseSource ? ' draggable treatment cube' : nurseDestination ? ' active ailment destination' : legalPreview ? ` can use ${legalDice.map(dieLabel).join(', ')}` : ''}">${assignmentVisual}</button>`;
  }).join('');
  const rearrangeDragging = rearrangeMode && state.rearrangeDragging && state.rearrangeDragSourceId === patient.id;
  const cardClass = `${variant === 'preview' ? 'preview-card' : ''} ${interactive ? 'interactive' : ''} ${rearrangeMode ? 'rearrange-selectable' : ''} ${rearrangeDragging ? 'rearrange-drag-source' : ''} ${variant === 'draggable' ? 'draggable-card' : ''}`;
  const admissionDrag = variant === 'preview' ? ' data-admission-drag="true"' : '';
  const rearrangeAttributes = rearrangeMode ? ` data-rearrange-drag="true" data-rearrange-id="${patient.id}" role="button" tabindex="0" aria-label="Drag ${escapeHtml(patient.name)} to reorder the Waiting Room"` : '';
  return `<div class="patient-card ${cardClass}"${admissionDrag}${rearrangeAttributes}><img draggable="false" src="${cardAsset(patient.image)}" alt="${escapeHtml(patient.name)}" />${zones}</div>`;
}

function renderWaitingRoom() {
  const rearrangeMode = state.phase === 'discharge' && state.pendingThankYou?.thankYou === 'Waiting Room';
  const repairMode = state.phase === 'discharge' && state.pendingThankYou?.thankYou === 'Repair';
  const rearrangePatients = rearrangeMode
    ? state.rearrangeOrder.map((id) => state.waiting.find((patient) => patient.id === id)).filter(Boolean)
    : state.waiting;
  const displayed = [...rearrangePatients];
  const previewIndex = state.phase === 'admission' && state.admissionCard && Number.isInteger(state.admissionPreviewIndex) ? state.admissionPreviewIndex : null;
  if (previewIndex !== null) displayed.splice(previewIndex, 0, state.admissionCard);
  const displayedDiagnosis = calculateDiagnosis(displayed);
  const admissionActive = state.phase === 'admission' && state.admissionCard;
  const slots = Array.from({ length: 6 }, (_, index) => {
    const patient = displayed[index];
    const isPreview = patient === state.admissionCard && previewIndex !== null;
    const validTarget = admissionActive && isValidAdmissionIndex(index);
    const targetKind = validTarget ? 'valid-target' : patient ? 'occupied-target' : 'invalid-target';
    const targetClass = admissionActive ? `admission-slot-target ${targetKind} ${state.admissionDragging ? 'dragging-target' : ''} ${isPreview ? 'preview-slot' : ''}` : '';
    const admissionActions = isPreview ? '<div class="local-actions admission-local-actions"><button class="button button-primary button-small" data-action="confirm-admission">Confirm</button></div>' : '';
    const rearrangeSlot = rearrangeMode ? ` data-rearrange-slot="${index}"` : '';
    return `<article class="patient-slot ${targetClass}" data-admission-slot="${index}"${rearrangeSlot}>${patient ? renderPatientCard(patient, index, isPreview ? 'preview' : 'normal', displayedDiagnosis) : '<div class="empty-slot"></div>'}${admissionActions}</article>`;
  });
  const rearrangeControls = rearrangeMode
    ? '<div class="rearrange-controls"><strong>Rearrange Waiting Room</strong><div class="rearrange-controls-actions"><button class="button button-primary button-small" data-action="confirm-rearrange">Confirm</button><button class="button button-quiet button-small" data-action="reset-rearrange">Reset</button></div></div>'
    : '';
  const repairControls = repairMode
    ? `<div class="repair-thank-you-controls"><div class="repair-thank-you-actions">${Object.entries(COLORS).map(([color, info]) => `<button class="button repair-choice repair-${info.className}" data-action="repair" data-value="${color}">Repair ${info.name}</button>`).join('')}</div><button class="button button-quiet" data-action="skip-thank-you">Skip</button></div>`
    : '';
  const dischargeChoices = state.phase === 'discharge' && !state.pendingThankYou && state.dischargeQueue.length
    ? `<section class="discharge-choices" aria-label="Choose or skip a Thank You"><strong>Choose or skip each Thank You</strong><div class="discharge-choice-row">${state.dischargeQueue.map((patient) => `<div class="discharge-choice-option"><button class="discharge-choice" data-action="choose-discharge" data-value="${patient.id}" aria-label="Resolve ${escapeHtml(patient.name)}'s Thank You: ${escapeHtml(patient.thankYou)}"><img draggable="false" src="${cardAsset(patient.image)}" alt="" /><span><b>${escapeHtml(patient.name)}</b><small class="discharge-choice-thankyou"><img draggable="false" src="${thankYouAsset(patient.thankYouImage)}" alt="" />${escapeHtml(patient.thankYou)}</small></span></button><button class="button button-quiet button-small" data-action="skip-queued-thankyou" data-value="${patient.id}">Skip Thank You</button></div>`).join('')}</div></section>`
    : '';
  $('#waiting-room').innerHTML = `<div class="waiting-slots">${slots.join('')}</div>${rearrangeControls}${repairControls}${dischargeChoices}`;
  renderPatientDeckPreview();
}

function renderPatientDeckPreview() {
  const target = $('#patient-deck-preview');
  if (!target) return;
  const active = state.phase === 'discharge' && state.pendingThankYou?.thankYou === 'Patient Deck';
  if (!active) {
    target.innerHTML = '';
    return;
  }
  const cards = patientDeckOrderCards();
  if (!cards.length) {
    target.innerHTML = `<div class="patient-deck-preview-empty"><span>No Patient Deck cards remain.</span><button class="button button-quiet button-small" data-action="skip-thank-you">Continue</button></div>`;
    return;
  }
  const cardMarkup = cards.map((patient, index) => {
    const dragging = state.patientDeckDragging && state.patientDeckDragSourceId === patient.id;
    return `<article class="patient-deck-slot" data-patient-deck-slot="${index}"><div class="patient-card patient-deck-preview-card ${dragging ? 'patient-deck-drag-source' : ''}" data-patient-deck-drag="true" data-patient-deck-id="${patient.id}" role="button" tabindex="0" aria-label="Drag ${escapeHtml(patient.name)} to reorder the Patient Deck preview"><img draggable="false" src="${cardAsset(patient.image)}" alt="${escapeHtml(patient.name)}" /></div></article>`;
  }).join('');
  target.innerHTML = `<div class="patient-deck-preview-layout"><span class="patient-deck-edge-label">Top</span><div class="patient-deck-preview-row">${cardMarkup}</div><span class="patient-deck-edge-label">Bottom</span><div class="patient-deck-preview-actions"><button class="button button-primary button-small" data-action="confirm-patient-deck">Confirm order</button><button class="button button-quiet button-small" data-action="reset-patient-deck">Reset order</button><button class="button button-quiet button-small" data-action="skip-thank-you">Skip</button></div></div>`;
}

function renderDiceTray() {
  const tray = $('#dice-tray');
  if (state.phase !== 'work') {
    tray.innerHTML = state.dicePool.length ? state.dicePool.map((die) => `<div class="die ${COLORS[die.color].className}" title="${colorName(die.color)} die"><span class="die-value">?</span></div>`).join('') : '<div class="dice-tray-empty">No dice in the pool.</div>';
    $('#dice-hint').textContent = state.nextDice.length ? `${state.nextDice.map(colorName).join(', ')} arrive next day.` : 'Roll when the Diagnosis is complete.';
    return;
  }
  tray.innerHTML = state.rolledDice.map((die) => {
    const action = state.staffAction;
    const staffSelected = action?.targetDieId === die.id
      || action?.firstDieId === die.id
      || action?.increaseDieId === die.id
      || action?.selectedDieIds?.includes(die.id);
    const dieButton = `<button class="die ${COLORS[die.color].className} ${die.id === selectedDieId ? 'selected' : ''} ${staffSelected ? 'staff-selected' : ''} ${die.status !== 'available' ? 'used' : ''}" data-action="select-die" data-die="${die.id}" ${die.status !== 'available' ? 'disabled' : ''} title="${dieLabel(die)}"><span class="die-value">${die.value}</span></button>`;
    return `<div class="die-control-wrap">${dieButton}</div>`;
  }).join('');
  $('#dice-hint').textContent = state.staffAction ? 'Choose directly in the playfield.' : selectedDieId ? 'Die selected. Choose a destination on the board.' : 'Select a die to assign it.';
}

function renderEquipment() {
  const markerTop = { R: '26.47%', Y: '44.19%', B: '61.63%' };
  const markerLeft = { 1: '16.42%', 2: '27.63%', 3: '38.84%', 4: '50.05%', 5: '61.27%', 6: '72.48%', 7: '83.69%' };
  const markerColor = { R: '#df654f', Y: '#d3b327', B: '#267da1' };
  const markers = Object.keys(COLORS).map((color) => `<span class="equipment-marker ${state.wear[color] >= 7 ? 'ooo' : ''}" style="--marker-top:${markerTop[color]};--marker-left:${markerLeft[Math.min(state.wear[color], 7)]};--marker-color:${markerColor[color]}" title="${colorName(color)} ${wearLabel(state.wear[color])}" aria-label="${colorName(color)} ${wearLabel(state.wear[color])}"></span>`).join('');
  $('#equipment-card-visual').innerHTML = `<div class="equipment-card-rotated"><img src="${cardAsset(20)}" alt="Equipment card" /></div>${markers}`;
  const die = selectedDie();
  const canUseDie = Boolean(die);
  const equipmentActions = state.pendingWorkAction ? '<div class="local-actions"><button class="button button-primary button-small" data-action="confirm-work-action">Confirm</button><button class="button button-quiet button-small" data-action="cancel-selection">Cancel</button></div>' : '';
  $('#work-actions').innerHTML = state.phase === 'work' ? `<div class="action-row"><button class="action-button ${state.pendingWorkAction?.type === 'maintenance' ? 'pending' : ''}" data-action="preview-maintenance" ${!canUseDie || die?.status !== 'available' || state.maintenance || state.wear[die?.color] <= 1 ? 'disabled' : ''}>Repair</button><button class="action-button ${state.pendingWorkAction?.type === 'upgrade' ? 'pending' : ''}" data-action="preview-upgrade" ${!canUseDie || die?.status !== 'available' || !canUpgradeEquipment(die?.color) ? 'disabled' : ''}>Upgrade</button></div>${equipmentActions}` : '';
  $('#cube-supply').innerHTML = state.treatmentCubes ? Array.from({ length: state.treatmentCubes }, () => '<span class="cube"></span>').join('') : '<span class="muted">Supply is empty</span>';
}

function renderLog() {
  const target = $('#event-log');
  if (!target) return;
  target.innerHTML = state.history.length ? state.history.map((entry) => `<div class="log-entry"><strong>${escapeHtml(entry.label)}</strong> ${escapeHtml(entry.message)}</div>`).join('') : '<span class="muted">Your shift notes will appear here.</span>';
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target || !state) return;
  const action = target.dataset.action;
  const value = target.dataset.value;
  if (action === 'new-game') openNewGameDialog();
  else if (action === 'new-game-random') { newGame(); closeDialog('new-game-dialog'); }
  else if (action === 'new-game-seeded') startNewGameWithEnteredSeed();
  else if (action === 'close-new-game') closeDialog('new-game-dialog');
  else if (action === 'open-load-setup') openLoadSetupDialog();
  else if (action === 'close-load-setup') closeDialog('load-setup-dialog');
  else if (action === 'confirm-admission') confirmAdmission();
  else if (action === 'start-work') startWork();
  else if (action === 'resolve-work') resolveWork();
  else if (action === 'next-day') beginRound();
  else if (action === 'select-die') selectDie(target.dataset.die);
  else if (action === 'preview-maintenance') previewMaintenance();
  else if (action === 'preview-upgrade') previewUpgrade();
  else if (action === 'confirm-work-action') confirmWorkAction();
  else if (action === 'place-treatment') placeTreatment(target.dataset.patient, target.dataset.zone);
  else if (action === 'undo-treatment') undoTreatment(target.dataset.patient, target.dataset.zone);
  else if (action === 'return-cube') returnDiagnosisCube(target.dataset.patient, target.dataset.zone);
  else if (action === 'preview-staff') previewStaff(value);
  else if (action === 'confirm-staff') confirmStaffActivation();
  else if (action === 'confirm-nurse') confirmNurseMove();
  else if (action === 'confirm-labtech') confirmLabTechReroll();
  else if (action === 'cancel-selection') cancelPendingSelection();
  else if (action === 'cancel-staff') cancelStaffAction();
  else if (action === 'choose-initial-staff') chooseInitialStaff(value);
  else if (action === 'choose-discharge') chooseDischarge(value);
  else if (action === 'skip-queued-thankyou') skipQueuedThankYou(value);
  else if (action === 'staff-choice') handleStaffChoice(value);
  else if (action === 'skip-thank-you') skipThankYou();
  else if (action === 'confirm-rearrange') confirmRearrange();
  else if (action === 'reset-rearrange') resetRearrangeOrder();
  else if (action === 'confirm-patient-deck') confirmPatientDeck();
  else if (action === 'reset-patient-deck') resetPatientDeckOrder();
  else if (action === 'repair') { state.wear[value] = Math.max(1, state.wear[value] - 2); logEvent('Repair', `${colorName(value)} equipment is now ${wearLabel(state.wear[value])}.`); resolveThankYou(); }
  else if (action === 'discard-hire-staff') discardHiredStaff(value);
  else if (action === 'confirm-hire-staff') confirmHireStaff();
});

document.addEventListener('change', (event) => {
  if (event.target?.id === 'setup-file-input') loadSetupFile(event);
});

function createNurseDragGhost() {
  const ghost = document.createElement('div');
  ghost.className = 'nurse-drag-ghost';
  ghost.innerHTML = '<span class="nurse-drag-ghost-cube" aria-hidden="true"></span>';
  document.body.appendChild(ghost);
  return ghost;
}

function updateNurseDragPosition(event) {
  const ghost = $('.nurse-drag-ghost');
  if (ghost) {
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;
  }
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-nurse-destination]');
  const nextTarget = target?.dataset.nurseDestination || null;
  if (nextTarget !== state.nurseDragTarget) {
    state.nurseDragTarget = nextTarget;
    renderWaitingRoom();
    renderBanner();
  }
}

function finishNurseDrag() {
  if (!state?.nurseDragging) return;
  const destination = state.nurseDragTarget;
  const previousDestination = state.nurseDragPreviousDestination;
  state.nurseDragging = false;
  state.nurseDragPointerId = null;
  state.nurseDragSource = null;
  state.nurseDragTarget = null;
  state.nurseDragPreviousDestination = null;
  $('.nurse-drag-ghost')?.remove();
  document.body.classList.remove('nurse-dragging');
  if (destination && state.staffAction?.staff?.key === 'nurse') {
    handleStaffChoice(destination);
  } else {
    if (state.staffAction?.staff?.key === 'nurse') state.staffAction.destination = previousDestination;
    state.message = 'Drop the cube on an empty active ailment to move it.';
    render();
  }
}

document.addEventListener('pointerdown', (event) => {
  const source = event.target.closest('[data-nurse-source]');
  if (!source || state?.phase !== 'work' || state.staffAction?.staff?.key !== 'nurse') return;
  const sourceKey = source.dataset.nurseSource;
  const isPreviewSource = sourceKey && state.staffAction.destination === sourceKey;
  if (!sourceKey || (!state.cubes[sourceKey] && !isPreviewSource)) return;
  event.preventDefault();
  const previousDestination = state.staffAction.destination || null;
  if (!state.staffAction.source) state.staffAction.source = sourceKey;
  state.staffAction.type = 'nurse-destination';
  state.staffAction.destination = null;
  state.nurseDragging = true;
  state.nurseDragPointerId = event.pointerId;
  state.nurseDragSource = sourceKey;
  state.nurseDragTarget = null;
  state.nurseDragPreviousDestination = previousDestination;
  createNurseDragGhost();
  document.body.classList.add('nurse-dragging');
  updateNurseDragPosition(event);
  renderWaitingRoom();
  renderBanner();
});

document.addEventListener('pointermove', (event) => {
  if (!state?.nurseDragging || event.pointerId !== state.nurseDragPointerId) return;
  event.preventDefault();
  updateNurseDragPosition(event);
});

document.addEventListener('pointerup', (event) => {
  if (!state?.nurseDragging || event.pointerId !== state.nurseDragPointerId) return;
  event.preventDefault();
  updateNurseDragPosition(event);
  finishNurseDrag();
});

document.addEventListener('pointercancel', (event) => {
  if (!state?.nurseDragging || event.pointerId !== state.nurseDragPointerId) return;
  finishNurseDrag();
});

function moveReorderItem(order, sourceIndex, targetIndex) {
  const next = [...order];
  const [moved] = next.splice(sourceIndex, 1);
  next.splice(targetIndex, 0, moved);
  return next;
}

function createThankYouDragGhost(patient, className) {
  const ghost = document.createElement('div');
  ghost.className = `thank-you-drag-ghost ${className}`;
  ghost.innerHTML = `<img draggable="false" src="${cardAsset(patient.image)}" alt="" />`;
  document.body.appendChild(ghost);
  return ghost;
}

function updateRearrangeDragPosition(event) {
  const ghost = $('.rearrange-drag-ghost');
  if (ghost) {
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;
  }
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-rearrange-slot]');
  const targetIndex = target ? Number(target.dataset.rearrangeSlot) : null;
  if (Number.isInteger(targetIndex) && targetIndex !== state.rearrangeDragTargetIndex) {
    state.rearrangeOrder = moveReorderItem(state.rearrangeDragOriginOrder, state.rearrangeDragOriginOrder.indexOf(state.rearrangeDragSourceId), targetIndex);
    state.rearrangeDragTargetIndex = targetIndex;
    // Rebuild each Patient card so its ailment capsules reflect the preview order.
    renderWaitingRoom();
    syncPhysicalCardScale();
    renderBanner();
  }
}

function finishRearrangeDrag() {
  if (!state?.rearrangeDragging) return;
  const originOrder = state.rearrangeDragOriginOrder;
  if (!Number.isInteger(state.rearrangeDragTargetIndex) && originOrder) state.rearrangeOrder = originOrder;
  state.rearrangeDragging = false;
  state.rearrangeDragPointerId = null;
  state.rearrangeDragSourceId = null;
  state.rearrangeDragOriginOrder = null;
  state.rearrangeDragTargetIndex = null;
  $('.rearrange-drag-ghost')?.remove();
  document.body.classList.remove('rearrange-dragging');
  state.message = 'Waiting Room order preview updated. Drag again or confirm the order.';
  renderWaitingRoom();
  renderBanner();
}

document.addEventListener('pointerdown', (event) => {
  const card = event.target.closest('[data-rearrange-drag]');
  if (!card || state?.phase !== 'discharge' || state.pendingThankYou?.thankYou !== 'Waiting Room') return;
  const sourceId = card.dataset.rearrangeId;
  const sourceIndex = state.rearrangeOrder.indexOf(sourceId);
  const patient = state.waiting.find((item) => item.id === sourceId);
  if (!sourceId || sourceIndex < 0 || !patient) return;
  event.preventDefault();
  state.rearrangeDragging = true;
  state.rearrangeDragPointerId = event.pointerId;
  state.rearrangeDragSourceId = sourceId;
  state.rearrangeDragOriginOrder = [...state.rearrangeOrder];
  state.rearrangeDragTargetIndex = sourceIndex;
  createThankYouDragGhost(patient, 'rearrange-drag-ghost');
  document.body.classList.add('rearrange-dragging');
  updateRearrangeDragPosition(event);
  renderWaitingRoom();
  renderBanner();
});

document.addEventListener('pointermove', (event) => {
  if (!state?.rearrangeDragging || event.pointerId !== state.rearrangeDragPointerId) return;
  event.preventDefault();
  updateRearrangeDragPosition(event);
});

document.addEventListener('pointerup', (event) => {
  if (!state?.rearrangeDragging || event.pointerId !== state.rearrangeDragPointerId) return;
  event.preventDefault();
  updateRearrangeDragPosition(event);
  finishRearrangeDrag();
});

document.addEventListener('pointercancel', (event) => {
  if (!state?.rearrangeDragging || event.pointerId !== state.rearrangeDragPointerId) return;
  finishRearrangeDrag();
});

function updatePatientDeckDragPosition(event) {
  const ghost = $('.patient-deck-drag-ghost');
  if (ghost) {
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;
  }
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-patient-deck-slot]');
  const targetIndex = target ? Number(target.dataset.patientDeckSlot) : null;
  if (Number.isInteger(targetIndex) && targetIndex !== state.patientDeckDragTargetIndex) {
    state.patientDeckOrder = moveReorderItem(state.patientDeckDragOriginOrder, state.patientDeckDragOriginOrder.indexOf(state.patientDeckDragSourceId), targetIndex);
    state.patientDeckDragTargetIndex = targetIndex;
    renderPatientDeckPreview();
    renderBanner();
  }
}

function finishPatientDeckDrag() {
  if (!state?.patientDeckDragging) return;
  const originOrder = state.patientDeckDragOriginOrder;
  if (!Number.isInteger(state.patientDeckDragTargetIndex) && originOrder) state.patientDeckOrder = originOrder;
  state.patientDeckDragging = false;
  state.patientDeckDragPointerId = null;
  state.patientDeckDragSourceId = null;
  state.patientDeckDragOriginOrder = null;
  state.patientDeckDragTargetIndex = null;
  $('.patient-deck-drag-ghost')?.remove();
  document.body.classList.remove('patient-deck-dragging');
  state.message = 'Patient Deck order preview updated. Drag again or confirm the order.';
  renderPatientDeckPreview();
  renderBanner();
}

document.addEventListener('pointerdown', (event) => {
  const card = event.target.closest('[data-patient-deck-drag]');
  if (!card || state?.phase !== 'discharge' || state.pendingThankYou?.thankYou !== 'Patient Deck') return;
  const sourceId = card.dataset.patientDeckId;
  const sourceIndex = state.patientDeckOrder.indexOf(sourceId);
  const patient = patientDeckPreview().find((item) => item.id === sourceId);
  if (!sourceId || sourceIndex < 0 || !patient) return;
  event.preventDefault();
  state.patientDeckDragging = true;
  state.patientDeckDragPointerId = event.pointerId;
  state.patientDeckDragSourceId = sourceId;
  state.patientDeckDragOriginOrder = [...state.patientDeckOrder];
  state.patientDeckDragTargetIndex = sourceIndex;
  createThankYouDragGhost(patient, 'patient-deck-drag-ghost');
  document.body.classList.add('patient-deck-dragging');
  updatePatientDeckDragPosition(event);
  renderPatientDeckPreview();
  renderBanner();
});

document.addEventListener('pointermove', (event) => {
  if (!state?.patientDeckDragging || event.pointerId !== state.patientDeckDragPointerId) return;
  event.preventDefault();
  updatePatientDeckDragPosition(event);
});

document.addEventListener('pointerup', (event) => {
  if (!state?.patientDeckDragging || event.pointerId !== state.patientDeckDragPointerId) return;
  event.preventDefault();
  updatePatientDeckDragPosition(event);
  finishPatientDeckDrag();
});

document.addEventListener('pointercancel', (event) => {
  if (!state?.patientDeckDragging || event.pointerId !== state.patientDeckDragPointerId) return;
  finishPatientDeckDrag();
});

function createAdmissionDragGhost() {
  const ghost = document.createElement('div');
  ghost.className = 'admission-drag-ghost';
  ghost.innerHTML = `<img draggable="false" src="${cardAsset(state.admissionCard.image)}" alt="" />`;
  document.body.appendChild(ghost);
  return ghost;
}

function updateAdmissionDragPosition(event) {
  const ghost = $('.admission-drag-ghost');
  if (ghost) {
    ghost.style.left = `${event.clientX}px`;
    ghost.style.top = `${event.clientY}px`;
  }
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest('[data-admission-slot]');
  const targetIndex = target ? Number(target.dataset.admissionSlot) : null;
  const nextPreviewIndex = Number.isInteger(targetIndex) && isValidAdmissionIndex(targetIndex) ? targetIndex : null;
  if (nextPreviewIndex !== state.admissionPreviewIndex) {
    state.admissionPreviewIndex = nextPreviewIndex;
    renderWaitingRoom();
    renderAdmissionSource();
    renderBanner();
  }
  if (ghost) {
    const snapped = nextPreviewIndex !== null;
    ghost.classList.toggle('snapped', snapped);
    ghost.style.visibility = snapped ? 'hidden' : 'visible';
  }
}

function finishAdmissionDrag() {
  if (!state?.admissionDragging) return;
  const restoreIndex = state.admissionPreviewIndex === null ? state.admissionDragOriginIndex : null;
  state.admissionDragging = false;
  state.admissionDragPointerId = null;
  state.admissionDragOriginIndex = null;
  if (Number.isInteger(restoreIndex)) state.admissionPreviewIndex = restoreIndex;
  $('.admission-drag-ghost')?.remove();
  document.body.classList.remove('admission-dragging');
  renderWaitingRoom();
  renderAdmissionSource();
  renderBanner();
}

document.addEventListener('pointerdown', (event) => {
  const card = event.target.closest('[data-admission-drag]');
  if (!card || state?.phase !== 'admission' || !state.admissionCard) return;
  event.preventDefault();
  state.admissionDragging = true;
  state.admissionDragPointerId = event.pointerId;
  state.admissionDragOriginIndex = Number.isInteger(state.admissionPreviewIndex) ? state.admissionPreviewIndex : null;
  state.admissionPreviewIndex = null;
  createAdmissionDragGhost();
  document.body.classList.add('admission-dragging');
  updateAdmissionDragPosition(event);
  renderWaitingRoom();
  renderAdmissionSource();
  renderBanner();
});

document.addEventListener('pointermove', (event) => {
  if (!state?.admissionDragging || event.pointerId !== state.admissionDragPointerId) return;
  event.preventDefault();
  updateAdmissionDragPosition(event);
});

document.addEventListener('pointerup', (event) => {
  if (!state?.admissionDragging || event.pointerId !== state.admissionDragPointerId) return;
  event.preventDefault();
  finishAdmissionDrag();
});

document.addEventListener('pointercancel', (event) => {
  if (!state?.admissionDragging || event.pointerId !== state.admissionDragPointerId) return;
  finishAdmissionDrag();
});

const legalZonesToggle = $('#show-legal-zones');
legalZonesToggle.checked = showLegalZones;
legalZonesToggle.addEventListener('change', () => {
  showLegalZones = legalZonesToggle.checked;
  render();
});

configureSetupControls();
newGame();
