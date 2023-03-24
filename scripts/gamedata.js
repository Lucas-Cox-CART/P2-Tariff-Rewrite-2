const propertyData = [
    //[name, rent, house1, house2, house3, house4, hotel, mortgage, pricehouse, pricehotel, purchaseCost]
    ['Go'],
    ['CandyLand', 500, 2500, 7500, 22500, 40000, 62500, 7500, 12500, 50000, 15000],
    ['Chest'], //This is 2 for instance
    ['CornDog Castle', 1000, 5000, 15000, 45000, 80000, 112500, 7500, 12500, 50000, 15000],
    ['IRS Audit'],
    ['Delta Airliner'],
    ['Mount President Face', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    ['Statue of Liberty', 1500, 7500, 22500, 67500, 100000, 137500, 12500, 12500, 50000, 25000],
    ['Chance'],
    ['Pearl Harbor', 2000, 10000, 25000, 75000, 112000, 150000, 15000, 12500, 50000, 30000],
    ['Jail'],
    ['MY Tech Center', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    ['Elec. Bill'],
    ['MP Architect', 2500, 12500, 37500, 112500, 156300, 187500, 17500, 25000, 100000, 35000],
    ['LC Clinic', 3000, 15000, 45000, 125000, 175000, 225000, 20000, 25000, 100000, 40000],
    ['Sputnik Express'],
    ['Ceasar Palace', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    ['Chest'],
    ['Sun City Casino', 3500, 17500, 50000, 137500, 187500, 237500, 22500, 25000, 100000, 45000],
    ['AG Turtle Preservation', 4000, 20000, 55000, 150000, 200000, 250000, 25000, 25000, 100000, 50000],
    ['BankLoan'],
    ['NORAD', 4500, 22500, 62500, 175000, 218750, 262500, 27500, 37500, 150000, 55000],
    ['Chance'],
    ['The Pentagon', 4500, 22500, 62500, 175000, 218750, 262500, 37500, 37500, 150000, 55000],
    ['Area51', 5000, 25000, 75000, 187500, 231250, 275000, 30000, 37500, 150000, 60000],
    ['USS Montana']
    ['Col. Corn Lighthouse', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    ['Fredbear Family Diner', 5500, 27500, 82500, 200000, 243800, 287500, 32500, 37500, 150000, 65000],
    ['Water Works'],
    ['Pious Sanctuary', 6000, 30000, 90000, 212500, 256500, 256300, 35000, 37500, 150000, 70000],
    ['Go to Jail'],
    ['Fast Fusion', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    ['MA Solar Field', 6500, 32500, 97500, 225000, 275000, 318800, 37500, 50000, 200000, 75000],
    ['Chest'],
    ['DeLaRosa Atomic', 7000, 37500, 112500, 250000, 300000, 350000, 40000, 50000, 200000, 80000],
    ['American Ambulance'],
    ['Chance'],
    ['Chump Tower', 8700, 43800, 125000, 275000, 325000, 375000, 43700, 50000, 200000, 87500],
    ['Luxury Tax'],
    ['Empire State Building', 12500, 50000, 150000, 350000, 425000, 500000, 50000, 50000, 200000, 100000]
]
//Contains all information for properties
const chanceCardData = [
    //There are 10 chance cards
    ['candyLane', 'Advance to Candylane'],
    ['bail', 'Get out of jail free card.'],
    ['capitalGains', '+10,000 capital! You made so much money this year that you need to spend it before the IRS takes it! You must spend 10,000 dollars before the next passing go or else you have to pay interest...'],
    ['bigSneeze', 'ACHOOO. You sneezed to hard you moved back 3 spaces.'],
    ['whaleFishing', 'YOU\'VE BEEN TROLLED! You lost 5000.'],
    ['generalRepairs', 'This one sucks late game... pay 15000 capital for each owned building'],
    ['gospelOfWealth', 'Your kind soul decided to give some money to charity. You donated 10000 capital to one. You lost 10000. How strange.'],
    ['taxEvasion', 'Next time you pass go, there is a 50% chance you will avoid taxes, but also a 50% you get sent to jail.'],
    ['takingRide', 'Move to the nearest transportation tile in front of you.'],
    ['biteOf87', '\" WAS THAT THE BITE OF 87???"\ Advance to Fredbear\'s Family Diner.']
]
//Contains all information for Chance cards
const chestCardData = [
    // There are 10 chest cards
    ['framing', '\"IT WAS HIM. I SAW HIM VENT."\ Send one player of your choice to jail.'],
    ['emptyChest', 'Wow. the chest hates you so much it didn\'t even give you any content! Sucks to be you!'],
    ['jailBreak', 'If you are ever in jail, use this and you can get out for free!'],
    ['setBacks', 'You sucked so bad at capitalism that now you have to move back 3 tiles. '],
    ['inheritance', 'Your uncle died. CONGRATS! You inherit 15,000 capital!'],
    ['bigTower', 'LOOK AT YOU GOING BIG!! Advance to the Empire State Building. Do not pass go.'],
    ['opportunist', 'Advance to the closest chance card, and take a card.'],
    ['caughtLackin', 'Timeout corner for you buster.'],
    ['leapYear', 'Advance to go and instantly gain your annual income.']
    ['tardisTax', 'The TARDIS requests tax for a disclosed reason. -20000 capital. ']
]
//Contains all information for Chest cards
const worldEvents = [
    //I removed Impending doom because I have no time to make that. 
    ["Pandemic 1", "The pandemic has started! Lucky for you you get a 15,000$ stimulus, but... inflation is up 10%. Tread lightly. "],
    ["Pandemic 2", "Well that is not good... 5% inflation.... and you get only half your annual income!"],
    ["Bull Market", "At the end of every player's turn, the price of all stats on properties rise by 5-20%."],
    ["Recession", "OH NOES! The economy inflated by 15%, and now all properties produce 10% less!"],
    ["Waste of an event", "Some twitter person started up a whole conspiracy where something bad was going to happen. This is stupid. Nothing bad is ever going to happen."],
    ["War", "Some genius decided war is a good idea. This is super good for you! You get +20% extra on annual income... but be careful: Taxes are up."],
    ["Technological Revolution", "A revolutionary new invention was just made! One player dominated the market and nearly doubled their income! Every other player wasted valuable resources and lost 20% of their wealth."],
]
//Contains all information for World Events

let worldEventCooldown = false;
let worldEvent = null;
let president = null;