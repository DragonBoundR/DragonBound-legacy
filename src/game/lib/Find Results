Searching 38 files for "Tornado"

C:\Users\Administrator\Desktop\Groundbound\src\game\data.js:
 80323          ]
 80324      ],
 80325:     [2611, 4996, 5, 2, "f204996", "Tornado", {
 80326              "min_rank": 0,
 80327              "note": 1,

C:\Users\Administrator\Desktop\Groundbound\src\game\gametypes.js:
  791  			power		: 50
  792  		},
  793: 		tornado: {
  794  			id			: 8,
  795  			collideType	: "power",
  796  			castAtForce	: ["Active","Next"],
  797: 			castAtShoot	: [["Tornado",{
  798  				position	: "parent",
  799  				power		: "auto",
  ...
  825  	Types.WEATHERS.list.random,
  826  	Types.WEATHERS.list.mirror,
  827: 	Types.WEATHERS.list.tornado
  828  ]
  829  Types.MOBILES = [

C:\Users\Administrator\Desktop\Groundbound\src\game\world.js:
  771  		});
  772  	}
  773: 	_castWeatherTornado(shoot,force,config) {
  774  		let side			= shoot.a.x>force.px? "R":"L"
  775: 		shoot.lastTornado	= shoot.lastTornado	? shoot.lastTornado:null
  776: 		if (shoot.lastTornado !== force.px) {
  777: 			shoot.lastTornado	= force.px
  778: 			shoot.sideTornado	= side
  779: 			shoot.countTornado	= Math.ceil(force.power/40)
  780: 		//console.log("cast tornado",{
  781  			//	c1:!force.isCollide(shoot.a.x,-10),
  782: 			//	c2:shoot.sideTornado!==side,
  783: 			//	c3:shoot.countTornado>0,
  784  			//	side:side,
  785: 			//	lastTornado:shoot.lastTornado,
  786  			//	ax:force.px,
  787  			//	forcePower:force.power
  788  		//	});
  789  		}
  790: 		if (!force.isCollide(shoot.a.x,-10)&&shoot.sideTornado!==side&&shoot.countTornado>0) {
  791: 			shoot.countTornado--
  792  			shoot.countMirror	= 0
  793  			shoot.lastMirror	= null
  794  			config = {...config,...{
  795: 				sideTornado	: side,
  796: 				countTornado: shoot.countTornado,
  797: 				lastTornado	: shoot.lastTornado
  798  			}}
  799  			//console.log("is true",{shoot:shoot})

C:\Users\Administrator\Desktop\Groundbound\src\game\Extension\Model\WeatherModel.js:
   15  const PropertiesEntity = require("../Entity/PropertiesEntity");
   16  const { WEATHER } = require("../Types/index");
   17: const { SUN, LIGHTNING, BLACK, RANDOM, MIRROR, TORNADO } = WEATHER;
   18  
   19  class WeatherModel {
   ..
   82  
   83    static getListPhysical() {
   84:     return [SUN, LIGHTNING, BLACK, RANDOM, MIRROR, TORNADO];
   85    }
   86  

C:\Users\Administrator\Desktop\Groundbound\src\game\Extension\Types\index.js:
   21      RANDOM: 6,
   22      MIRROR: 7,
   23:     TORNADO: 8,
   24      NONE: 9,
   25      MOON: 10,
   ..
   35      RANDOM: 6,
   36      MIRROR: 7,
   37:     TORNADO: 8,
   38    }
   39  };

29 matches across 5 files
