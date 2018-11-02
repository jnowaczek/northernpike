import * as $protobuf from 'protobufjs';
import {Long} from "protobufjs";
/** Properties of a RovState. */
export interface ITelemetry {

    /** RovState messageTime */
    messageTime?: (google.protobuf.ITimestamp|null);

    /** RovState voltage */
    voltage?: (number|null);

    /** RovState gyro */
    gyro?: (Telemetry.IGyroState|null);

    /** RovState barometer */
    barometer?: (Telemetry.IBarometerState|null);

    /** RovState compass */
    compass?: (Telemetry.ICompassState|null);

    /** RovState switches */
    switches?: (Telemetry.ISwitchState[]|null);

    /** RovState controllerAxes */
    controllerAxes?: (Telemetry.IAnalogStickState|null);
}

/** Represents a RovState. */
export class Telemetry implements ITelemetry {

    /**
     * Constructs a new RovState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITelemetry);

    /** RovState messageTime. */
    public messageTime?: (google.protobuf.ITimestamp|null);

    /** RovState voltage. */
    public voltage: number;

    /** RovState gyro. */
    public gyro?: (Telemetry.IGyroState|null);

    /** RovState barometer. */
    public barometer?: (Telemetry.IBarometerState|null);

    /** RovState compass. */
    public compass?: (Telemetry.ICompassState|null);

    /** RovState switches. */
    public switches: Telemetry.ISwitchState[];

    /** RovState controllerAxes. */
    public controllerAxes?: (Telemetry.IAnalogStickState|null);

    /**
     * Creates a new RovState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Telemetry instance
     */
    public static create(properties?: ITelemetry): Telemetry;

    /**
     * Encodes the specified RovState message. Does not implicitly {@link Telemetry.verify|verify} messages.
     * @param message RovState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITelemetry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RovState message, length delimited. Does not implicitly {@link Telemetry.verify|verify} messages.
     * @param message RovState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITelemetry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RovState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Telemetry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry;

    /**
     * Decodes a RovState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Telemetry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry;

    /**
     * Verifies a RovState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RovState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Telemetry
     */
    public static fromObject(object: { [k: string]: any }): Telemetry;

    /**
     * Creates a plain object from a RovState message. Also converts values to other types if specified.
     * @param message RovState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Telemetry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RovState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Telemetry {

    /** Properties of a SwitchState. */
    interface ISwitchState {

        /** SwitchState switchName */
        switchName?: (string|null);

        /** SwitchState value */
        value?: (boolean|null);
    }

    /** Represents a SwitchState. */
    class SwitchState implements ISwitchState {

        /**
         * Constructs a new SwitchState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Telemetry.ISwitchState);

        /** SwitchState switchName. */
        public switchName: string;

        /** SwitchState value. */
        public value: boolean;

        /**
         * Creates a new SwitchState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SwitchState instance
         */
        public static create(properties?: Telemetry.ISwitchState): Telemetry.SwitchState;

        /**
         * Encodes the specified SwitchState message. Does not implicitly {@link Telemetry.SwitchState.verify|verify} messages.
         * @param message SwitchState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Telemetry.ISwitchState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SwitchState message, length delimited. Does not implicitly {@link Telemetry.SwitchState.verify|verify} messages.
         * @param message SwitchState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Telemetry.ISwitchState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SwitchState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SwitchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.SwitchState;

        /**
         * Decodes a SwitchState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SwitchState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.SwitchState;

        /**
         * Verifies a SwitchState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SwitchState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SwitchState
         */
        public static fromObject(object: { [k: string]: any }): Telemetry.SwitchState;

        /**
         * Creates a plain object from a SwitchState message. Also converts values to other types if specified.
         * @param message SwitchState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Telemetry.SwitchState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SwitchState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GyroState. */
    interface IGyroState {

        /** GyroState x */
        x?: (number|null);

        /** GyroState y */
        y?: (number|null);

        /** GyroState z */
        z?: (number|null);
    }

    /** Represents a GyroState. */
    class GyroState implements IGyroState {

        /**
         * Constructs a new GyroState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Telemetry.IGyroState);

        /** GyroState x. */
        public x: number;

        /** GyroState y. */
        public y: number;

        /** GyroState z. */
        public z: number;

        /**
         * Creates a new GyroState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GyroState instance
         */
        public static create(properties?: Telemetry.IGyroState): Telemetry.GyroState;

        /**
         * Encodes the specified GyroState message. Does not implicitly {@link Telemetry.GyroState.verify|verify} messages.
         * @param message GyroState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Telemetry.IGyroState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GyroState message, length delimited. Does not implicitly {@link Telemetry.GyroState.verify|verify} messages.
         * @param message GyroState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Telemetry.IGyroState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GyroState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GyroState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.GyroState;

        /**
         * Decodes a GyroState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GyroState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.GyroState;

        /**
         * Verifies a GyroState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GyroState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GyroState
         */
        public static fromObject(object: { [k: string]: any }): Telemetry.GyroState;

        /**
         * Creates a plain object from a GyroState message. Also converts values to other types if specified.
         * @param message GyroState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Telemetry.GyroState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GyroState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BarometerState. */
    interface IBarometerState {

        /** BarometerState value */
        value?: (number|null);
    }

    /** Represents a BarometerState. */
    class BarometerState implements IBarometerState {

        /**
         * Constructs a new BarometerState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Telemetry.IBarometerState);

        /** BarometerState value. */
        public value: number;

        /**
         * Creates a new BarometerState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BarometerState instance
         */
        public static create(properties?: Telemetry.IBarometerState): Telemetry.BarometerState;

        /**
         * Encodes the specified BarometerState message. Does not implicitly {@link Telemetry.BarometerState.verify|verify} messages.
         * @param message BarometerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Telemetry.IBarometerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BarometerState message, length delimited. Does not implicitly {@link Telemetry.BarometerState.verify|verify} messages.
         * @param message BarometerState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Telemetry.IBarometerState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BarometerState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BarometerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.BarometerState;

        /**
         * Decodes a BarometerState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BarometerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.BarometerState;

        /**
         * Verifies a BarometerState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BarometerState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BarometerState
         */
        public static fromObject(object: { [k: string]: any }): Telemetry.BarometerState;

        /**
         * Creates a plain object from a BarometerState message. Also converts values to other types if specified.
         * @param message BarometerState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Telemetry.BarometerState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BarometerState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CompassState. */
    interface ICompassState {

        /** CompassState heading */
        heading?: (number|null);
    }

    /** Represents a CompassState. */
    class CompassState implements ICompassState {

        /**
         * Constructs a new CompassState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Telemetry.ICompassState);

        /** CompassState heading. */
        public heading: number;

        /**
         * Creates a new CompassState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CompassState instance
         */
        public static create(properties?: Telemetry.ICompassState): Telemetry.CompassState;

        /**
         * Encodes the specified CompassState message. Does not implicitly {@link Telemetry.CompassState.verify|verify} messages.
         * @param message CompassState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Telemetry.ICompassState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CompassState message, length delimited. Does not implicitly {@link Telemetry.CompassState.verify|verify} messages.
         * @param message CompassState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Telemetry.ICompassState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CompassState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CompassState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.CompassState;

        /**
         * Decodes a CompassState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CompassState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.CompassState;

        /**
         * Verifies a CompassState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CompassState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CompassState
         */
        public static fromObject(object: { [k: string]: any }): Telemetry.CompassState;

        /**
         * Creates a plain object from a CompassState message. Also converts values to other types if specified.
         * @param message CompassState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Telemetry.CompassState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CompassState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnalogStickState. */
    interface IAnalogStickState {

        /** AnalogStickState axes */
        axes?: (Telemetry.AnalogStickState.IAnalogAxis[]|null);
    }

    /** Represents an AnalogStickState. */
    class AnalogStickState implements IAnalogStickState {

        /**
         * Constructs a new AnalogStickState.
         * @param [properties] Properties to set
         */
        constructor(properties?: Telemetry.IAnalogStickState);

        /** AnalogStickState axes. */
        public axes: Telemetry.AnalogStickState.IAnalogAxis[];

        /**
         * Creates a new AnalogStickState instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnalogStickState instance
         */
        public static create(properties?: Telemetry.IAnalogStickState): Telemetry.AnalogStickState;

        /**
         * Encodes the specified AnalogStickState message. Does not implicitly {@link Telemetry.AnalogStickState.verify|verify} messages.
         * @param message AnalogStickState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Telemetry.IAnalogStickState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnalogStickState message, length delimited. Does not implicitly {@link Telemetry.AnalogStickState.verify|verify} messages.
         * @param message AnalogStickState message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Telemetry.IAnalogStickState, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnalogStickState message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnalogStickState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.AnalogStickState;

        /**
         * Decodes an AnalogStickState message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnalogStickState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.AnalogStickState;

        /**
         * Verifies an AnalogStickState message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnalogStickState message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnalogStickState
         */
        public static fromObject(object: { [k: string]: any }): Telemetry.AnalogStickState;

        /**
         * Creates a plain object from an AnalogStickState message. Also converts values to other types if specified.
         * @param message AnalogStickState
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Telemetry.AnalogStickState, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnalogStickState to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace AnalogStickState {

        /** Properties of an AnalogAxis. */
        interface IAnalogAxis {

            /** AnalogAxis name */
            name?: (string|null);

            /** AnalogAxis xPosition */
            xPosition?: (number|null);

            /** AnalogAxis yPosition */
            yPosition?: (number|null);

            /** AnalogAxis angleDegrees */
            angleDegrees?: (number|null);

            /** AnalogAxis angleRadians */
            angleRadians?: (number|null);
        }

        /** Represents an AnalogAxis. */
        class AnalogAxis implements IAnalogAxis {

            /**
             * Constructs a new AnalogAxis.
             * @param [properties] Properties to set
             */
            constructor(properties?: Telemetry.AnalogStickState.IAnalogAxis);

            /** AnalogAxis name. */
            public name: string;

            /** AnalogAxis xPosition. */
            public xPosition: number;

            /** AnalogAxis yPosition. */
            public yPosition: number;

            /** AnalogAxis angleDegrees. */
            public angleDegrees: number;

            /** AnalogAxis angleRadians. */
            public angleRadians: number;

            /**
             * Creates a new AnalogAxis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnalogAxis instance
             */
            public static create(properties?: Telemetry.AnalogStickState.IAnalogAxis): Telemetry.AnalogStickState.AnalogAxis;

            /**
             * Encodes the specified AnalogAxis message. Does not implicitly {@link Telemetry.AnalogStickState.AnalogAxis.verify|verify} messages.
             * @param message AnalogAxis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Telemetry.AnalogStickState.IAnalogAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AnalogAxis message, length delimited. Does not implicitly {@link Telemetry.AnalogStickState.AnalogAxis.verify|verify} messages.
             * @param message AnalogAxis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Telemetry.AnalogStickState.IAnalogAxis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AnalogAxis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnalogAxis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Telemetry.AnalogStickState.AnalogAxis;

            /**
             * Decodes an AnalogAxis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnalogAxis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Telemetry.AnalogStickState.AnalogAxis;

            /**
             * Verifies an AnalogAxis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AnalogAxis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnalogAxis
             */
            public static fromObject(object: { [k: string]: any }): Telemetry.AnalogStickState.AnalogAxis;

            /**
             * Creates a plain object from an AnalogAxis message. Also converts values to other types if specified.
             * @param message AnalogAxis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Telemetry.AnalogStickState.AnalogAxis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AnalogAxis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
