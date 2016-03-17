declare module 'sbg-node' {
	 class Greeter {
	    greeting: string;
	    da: string;
	    constructor(message: string);
	    greet(): string;
	}
	export = Greeter;

}
declare module 'sbg-nodeaces' {
	export namespace Interfaces {
	    interface ClientConfigInterface {
	    }
	    interface SBGConfigInterface {
	        sessionId: string;
	    }
	    interface InstanceConfigInterface extends SBGConfigInterface {
	        temp: string;
	    }
	}

}
declare module 'sbg-node' {
	import { Interfaces } from 'interfaces/SBGConfigInterfaces'; class SBG {
	    config: Interfaces.SBGConfigInterface;
	    constructor(config: Interfaces.SBGConfigInterface);
	}
	export = SBG;

}
declare module 'sbg-node' {
	export class Base {
	}

}
declare module 'sbg-node' {
	import { Base } from 'Base';
	export class Peon extends Base {
	    sessionId: string;
	    constructor();
	}

}
