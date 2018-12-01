import {Deserializable} from './Deserializable';
import {load} from 'protobufjs';

export class Switches implements Deserializable {
	deserialize(input: any): this {
		load('shared/protos/telemetry.proto').then((root) => {
			const SwitchMessage = root.lookupType('telemetry.Switch');
			Object.assign(this, SwitchMessage.decode(input));
		}).catch((error) => console.log(error));
		return this;
	}
}
