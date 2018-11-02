/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Telemetry = (function() {
    
        /**
         * Properties of a RovState.
         * @exports ITelemetry
         * @interface ITelemetry
         * @property {google.protobuf.ITimestamp|null} [messageTime] RovState messageTime
         * @property {number|null} [voltage] RovState voltage
         * @property {Telemetry.IGyroState|null} [gyro] RovState gyro
         * @property {Telemetry.IBarometerState|null} [barometer] RovState barometer
         * @property {Telemetry.ICompassState|null} [compass] RovState compass
         * @property {Array.<Telemetry.ISwitchState>|null} [switches] RovState switches
         * @property {Telemetry.IAnalogStickState|null} [controllerAxes] RovState controllerAxes
         */
    
        /**
         * Constructs a new RovState.
         * @exports RovState
         * @classdesc Represents a RovState.
         * @implements ITelemetry
         * @constructor
         * @param {ITelemetry=} [properties] Properties to set
         */
        function Telemetry(properties) {
            this.switches = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RovState messageTime.
         * @member {google.protobuf.ITimestamp|null|undefined} messageTime
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.messageTime = null;
    
        /**
         * RovState voltage.
         * @member {number} voltage
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.voltage = 0;
    
        /**
         * RovState gyro.
         * @member {Telemetry.IGyroState|null|undefined} gyro
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.gyro = null;
    
        /**
         * RovState barometer.
         * @member {Telemetry.IBarometerState|null|undefined} barometer
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.barometer = null;
    
        /**
         * RovState compass.
         * @member {Telemetry.ICompassState|null|undefined} compass
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.compass = null;
    
        /**
         * RovState switches.
         * @member {Array.<Telemetry.ISwitchState>} switches
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.switches = $util.emptyArray;
    
        /**
         * RovState controllerAxes.
         * @member {Telemetry.IAnalogStickState|null|undefined} controllerAxes
         * @memberof RovState
         * @instance
         */
        Telemetry.prototype.controllerAxes = null;
    
        /**
         * Creates a new RovState instance using the specified properties.
         * @function create
         * @memberof RovState
         * @static
         * @param {ITelemetry=} [properties] Properties to set
         * @returns {Telemetry} RovState instance
         */
        Telemetry.create = function create(properties) {
            return new Telemetry(properties);
        };
    
        /**
         * Encodes the specified RovState message. Does not implicitly {@link Telemetry.verify|verify} messages.
         * @function encode
         * @memberof RovState
         * @static
         * @param {ITelemetry} message RovState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Telemetry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageTime != null && message.hasOwnProperty("messageTime"))
                $root.google.protobuf.Timestamp.encode(message.messageTime, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.voltage);
            if (message.gyro != null && message.hasOwnProperty("gyro"))
                $root.Telemetry.GyroState.encode(message.gyro, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.barometer != null && message.hasOwnProperty("barometer"))
                $root.Telemetry.BarometerState.encode(message.barometer, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.compass != null && message.hasOwnProperty("compass"))
                $root.Telemetry.CompassState.encode(message.compass, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.switches != null && message.switches.length)
                for (var i = 0; i < message.switches.length; ++i)
                    $root.Telemetry.SwitchState.encode(message.switches[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.controllerAxes != null && message.hasOwnProperty("controllerAxes"))
                $root.Telemetry.AnalogStickState.encode(message.controllerAxes, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified RovState message, length delimited. Does not implicitly {@link Telemetry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RovState
         * @static
         * @param {ITelemetry} message RovState message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Telemetry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RovState message from the specified reader or buffer.
         * @function decode
         * @memberof RovState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Telemetry} RovState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Telemetry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voltage = reader.float();
                    break;
                case 3:
                    message.gyro = $root.Telemetry.GyroState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.barometer = $root.Telemetry.BarometerState.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.compass = $root.Telemetry.CompassState.decode(reader, reader.uint32());
                    break;
                case 11:
                    if (!(message.switches && message.switches.length))
                        message.switches = [];
                    message.switches.push($root.Telemetry.SwitchState.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.controllerAxes = $root.Telemetry.AnalogStickState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RovState message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RovState
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Telemetry} RovState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Telemetry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RovState message.
         * @function verify
         * @memberof RovState
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Telemetry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageTime != null && message.hasOwnProperty("messageTime")) {
                var error = $root.google.protobuf.Timestamp.verify(message.messageTime);
                if (error)
                    return "messageTime." + error;
            }
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                if (typeof message.voltage !== "number")
                    return "voltage: number expected";
            if (message.gyro != null && message.hasOwnProperty("gyro")) {
                var error = $root.Telemetry.GyroState.verify(message.gyro);
                if (error)
                    return "gyro." + error;
            }
            if (message.barometer != null && message.hasOwnProperty("barometer")) {
                var error = $root.Telemetry.BarometerState.verify(message.barometer);
                if (error)
                    return "barometer." + error;
            }
            if (message.compass != null && message.hasOwnProperty("compass")) {
                var error = $root.Telemetry.CompassState.verify(message.compass);
                if (error)
                    return "compass." + error;
            }
            if (message.switches != null && message.hasOwnProperty("switches")) {
                if (!Array.isArray(message.switches))
                    return "switches: array expected";
                for (var i = 0; i < message.switches.length; ++i) {
                    var error = $root.Telemetry.SwitchState.verify(message.switches[i]);
                    if (error)
                        return "switches." + error;
                }
            }
            if (message.controllerAxes != null && message.hasOwnProperty("controllerAxes")) {
                var error = $root.Telemetry.AnalogStickState.verify(message.controllerAxes);
                if (error)
                    return "controllerAxes." + error;
            }
            return null;
        };
    
        /**
         * Creates a RovState message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RovState
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Telemetry} RovState
         */
        Telemetry.fromObject = function fromObject(object) {
            if (object instanceof $root.Telemetry)
                return object;
            var message = new $root.Telemetry();
            if (object.messageTime != null) {
                if (typeof object.messageTime !== "object")
                    throw TypeError(".RovState.messageTime: object expected");
                message.messageTime = $root.google.protobuf.Timestamp.fromObject(object.messageTime);
            }
            if (object.voltage != null)
                message.voltage = Number(object.voltage);
            if (object.gyro != null) {
                if (typeof object.gyro !== "object")
                    throw TypeError(".RovState.gyro: object expected");
                message.gyro = $root.Telemetry.GyroState.fromObject(object.gyro);
            }
            if (object.barometer != null) {
                if (typeof object.barometer !== "object")
                    throw TypeError(".RovState.barometer: object expected");
                message.barometer = $root.Telemetry.BarometerState.fromObject(object.barometer);
            }
            if (object.compass != null) {
                if (typeof object.compass !== "object")
                    throw TypeError(".RovState.compass: object expected");
                message.compass = $root.Telemetry.CompassState.fromObject(object.compass);
            }
            if (object.switches) {
                if (!Array.isArray(object.switches))
                    throw TypeError(".RovState.switches: array expected");
                message.switches = [];
                for (var i = 0; i < object.switches.length; ++i) {
                    if (typeof object.switches[i] !== "object")
                        throw TypeError(".RovState.switches: object expected");
                    message.switches[i] = $root.Telemetry.SwitchState.fromObject(object.switches[i]);
                }
            }
            if (object.controllerAxes != null) {
                if (typeof object.controllerAxes !== "object")
                    throw TypeError(".RovState.controllerAxes: object expected");
                message.controllerAxes = $root.Telemetry.AnalogStickState.fromObject(object.controllerAxes);
            }
            return message;
        };
    
        /**
         * Creates a plain object from a RovState message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RovState
         * @static
         * @param {Telemetry} message RovState
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Telemetry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.switches = [];
            if (options.defaults) {
                object.messageTime = null;
                object.voltage = 0;
                object.gyro = null;
                object.barometer = null;
                object.compass = null;
                object.controllerAxes = null;
            }
            if (message.messageTime != null && message.hasOwnProperty("messageTime"))
                object.messageTime = $root.google.protobuf.Timestamp.toObject(message.messageTime, options);
            if (message.voltage != null && message.hasOwnProperty("voltage"))
                object.voltage = options.json && !isFinite(message.voltage) ? String(message.voltage) : message.voltage;
            if (message.gyro != null && message.hasOwnProperty("gyro"))
                object.gyro = $root.Telemetry.GyroState.toObject(message.gyro, options);
            if (message.barometer != null && message.hasOwnProperty("barometer"))
                object.barometer = $root.Telemetry.BarometerState.toObject(message.barometer, options);
            if (message.compass != null && message.hasOwnProperty("compass"))
                object.compass = $root.Telemetry.CompassState.toObject(message.compass, options);
            if (message.switches && message.switches.length) {
                object.switches = [];
                for (var j = 0; j < message.switches.length; ++j)
                    object.switches[j] = $root.Telemetry.SwitchState.toObject(message.switches[j], options);
            }
            if (message.controllerAxes != null && message.hasOwnProperty("controllerAxes"))
                object.controllerAxes = $root.Telemetry.AnalogStickState.toObject(message.controllerAxes, options);
            return object;
        };
    
        /**
         * Converts this RovState to JSON.
         * @function toJSON
         * @memberof RovState
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Telemetry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        Telemetry.SwitchState = (function() {
    
            /**
             * Properties of a SwitchState.
             * @memberof RovState
             * @interface ISwitchState
             * @property {string|null} [switchName] SwitchState switchName
             * @property {boolean|null} [value] SwitchState value
             */
    
            /**
             * Constructs a new SwitchState.
             * @memberof RovState
             * @classdesc Represents a SwitchState.
             * @implements ISwitchState
             * @constructor
             * @param {Telemetry.ISwitchState=} [properties] Properties to set
             */
            function SwitchState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SwitchState switchName.
             * @member {string} switchName
             * @memberof RovState.SwitchState
             * @instance
             */
            SwitchState.prototype.switchName = "";
    
            /**
             * SwitchState value.
             * @member {boolean} value
             * @memberof RovState.SwitchState
             * @instance
             */
            SwitchState.prototype.value = false;
    
            /**
             * Creates a new SwitchState instance using the specified properties.
             * @function create
             * @memberof RovState.SwitchState
             * @static
             * @param {Telemetry.ISwitchState=} [properties] Properties to set
             * @returns {Telemetry.SwitchState} SwitchState instance
             */
            SwitchState.create = function create(properties) {
                return new SwitchState(properties);
            };
    
            /**
             * Encodes the specified SwitchState message. Does not implicitly {@link Telemetry.SwitchState.verify|verify} messages.
             * @function encode
             * @memberof RovState.SwitchState
             * @static
             * @param {Telemetry.ISwitchState} message SwitchState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SwitchState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.switchName != null && message.hasOwnProperty("switchName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.switchName);
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified SwitchState message, length delimited. Does not implicitly {@link Telemetry.SwitchState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RovState.SwitchState
             * @static
             * @param {Telemetry.ISwitchState} message SwitchState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SwitchState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SwitchState message from the specified reader or buffer.
             * @function decode
             * @memberof RovState.SwitchState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Telemetry.SwitchState} SwitchState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SwitchState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.SwitchState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.switchName = reader.string();
                        break;
                    case 2:
                        message.value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SwitchState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RovState.SwitchState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Telemetry.SwitchState} SwitchState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SwitchState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SwitchState message.
             * @function verify
             * @memberof RovState.SwitchState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SwitchState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.switchName != null && message.hasOwnProperty("switchName"))
                    if (!$util.isString(message.switchName))
                        return "switchName: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };
    
            /**
             * Creates a SwitchState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RovState.SwitchState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Telemetry.SwitchState} SwitchState
             */
            SwitchState.fromObject = function fromObject(object) {
                if (object instanceof $root.Telemetry.SwitchState)
                    return object;
                var message = new $root.Telemetry.SwitchState();
                if (object.switchName != null)
                    message.switchName = String(object.switchName);
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };
    
            /**
             * Creates a plain object from a SwitchState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RovState.SwitchState
             * @static
             * @param {Telemetry.SwitchState} message SwitchState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SwitchState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.switchName = "";
                    object.value = false;
                }
                if (message.switchName != null && message.hasOwnProperty("switchName"))
                    object.switchName = message.switchName;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this SwitchState to JSON.
             * @function toJSON
             * @memberof RovState.SwitchState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SwitchState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SwitchState;
        })();
    
        Telemetry.GyroState = (function() {
    
            /**
             * Properties of a GyroState.
             * @memberof RovState
             * @interface IGyroState
             * @property {number|null} [x] GyroState x
             * @property {number|null} [y] GyroState y
             * @property {number|null} [z] GyroState z
             */
    
            /**
             * Constructs a new GyroState.
             * @memberof RovState
             * @classdesc Represents a GyroState.
             * @implements IGyroState
             * @constructor
             * @param {Telemetry.IGyroState=} [properties] Properties to set
             */
            function GyroState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GyroState x.
             * @member {number} x
             * @memberof RovState.GyroState
             * @instance
             */
            GyroState.prototype.x = 0;
    
            /**
             * GyroState y.
             * @member {number} y
             * @memberof RovState.GyroState
             * @instance
             */
            GyroState.prototype.y = 0;
    
            /**
             * GyroState z.
             * @member {number} z
             * @memberof RovState.GyroState
             * @instance
             */
            GyroState.prototype.z = 0;
    
            /**
             * Creates a new GyroState instance using the specified properties.
             * @function create
             * @memberof RovState.GyroState
             * @static
             * @param {Telemetry.IGyroState=} [properties] Properties to set
             * @returns {Telemetry.GyroState} GyroState instance
             */
            GyroState.create = function create(properties) {
                return new GyroState(properties);
            };
    
            /**
             * Encodes the specified GyroState message. Does not implicitly {@link Telemetry.GyroState.verify|verify} messages.
             * @function encode
             * @memberof RovState.GyroState
             * @static
             * @param {Telemetry.IGyroState} message GyroState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GyroState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.x != null && message.hasOwnProperty("x"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.x);
                if (message.y != null && message.hasOwnProperty("y"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.y);
                if (message.z != null && message.hasOwnProperty("z"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.z);
                return writer;
            };
    
            /**
             * Encodes the specified GyroState message, length delimited. Does not implicitly {@link Telemetry.GyroState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RovState.GyroState
             * @static
             * @param {Telemetry.IGyroState} message GyroState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GyroState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a GyroState message from the specified reader or buffer.
             * @function decode
             * @memberof RovState.GyroState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Telemetry.GyroState} GyroState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GyroState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.GyroState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.x = reader.int32();
                        break;
                    case 2:
                        message.y = reader.int32();
                        break;
                    case 3:
                        message.z = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a GyroState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RovState.GyroState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Telemetry.GyroState} GyroState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GyroState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a GyroState message.
             * @function verify
             * @memberof RovState.GyroState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GyroState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.x != null && message.hasOwnProperty("x"))
                    if (!$util.isInteger(message.x))
                        return "x: integer expected";
                if (message.y != null && message.hasOwnProperty("y"))
                    if (!$util.isInteger(message.y))
                        return "y: integer expected";
                if (message.z != null && message.hasOwnProperty("z"))
                    if (!$util.isInteger(message.z))
                        return "z: integer expected";
                return null;
            };
    
            /**
             * Creates a GyroState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RovState.GyroState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Telemetry.GyroState} GyroState
             */
            GyroState.fromObject = function fromObject(object) {
                if (object instanceof $root.Telemetry.GyroState)
                    return object;
                var message = new $root.Telemetry.GyroState();
                if (object.x != null)
                    message.x = object.x | 0;
                if (object.y != null)
                    message.y = object.y | 0;
                if (object.z != null)
                    message.z = object.z | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a GyroState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RovState.GyroState
             * @static
             * @param {Telemetry.GyroState} message GyroState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GyroState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.x = 0;
                    object.y = 0;
                    object.z = 0;
                }
                if (message.x != null && message.hasOwnProperty("x"))
                    object.x = message.x;
                if (message.y != null && message.hasOwnProperty("y"))
                    object.y = message.y;
                if (message.z != null && message.hasOwnProperty("z"))
                    object.z = message.z;
                return object;
            };
    
            /**
             * Converts this GyroState to JSON.
             * @function toJSON
             * @memberof RovState.GyroState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GyroState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return GyroState;
        })();
    
        Telemetry.BarometerState = (function() {
    
            /**
             * Properties of a BarometerState.
             * @memberof RovState
             * @interface IBarometerState
             * @property {number|null} [value] BarometerState value
             */
    
            /**
             * Constructs a new BarometerState.
             * @memberof RovState
             * @classdesc Represents a BarometerState.
             * @implements IBarometerState
             * @constructor
             * @param {Telemetry.IBarometerState=} [properties] Properties to set
             */
            function BarometerState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * BarometerState value.
             * @member {number} value
             * @memberof RovState.BarometerState
             * @instance
             */
            BarometerState.prototype.value = 0;
    
            /**
             * Creates a new BarometerState instance using the specified properties.
             * @function create
             * @memberof RovState.BarometerState
             * @static
             * @param {Telemetry.IBarometerState=} [properties] Properties to set
             * @returns {Telemetry.BarometerState} BarometerState instance
             */
            BarometerState.create = function create(properties) {
                return new BarometerState(properties);
            };
    
            /**
             * Encodes the specified BarometerState message. Does not implicitly {@link Telemetry.BarometerState.verify|verify} messages.
             * @function encode
             * @memberof RovState.BarometerState
             * @static
             * @param {Telemetry.IBarometerState} message BarometerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BarometerState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && message.hasOwnProperty("value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };
    
            /**
             * Encodes the specified BarometerState message, length delimited. Does not implicitly {@link Telemetry.BarometerState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RovState.BarometerState
             * @static
             * @param {Telemetry.IBarometerState} message BarometerState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BarometerState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a BarometerState message from the specified reader or buffer.
             * @function decode
             * @memberof RovState.BarometerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Telemetry.BarometerState} BarometerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BarometerState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.BarometerState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a BarometerState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RovState.BarometerState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Telemetry.BarometerState} BarometerState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BarometerState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a BarometerState message.
             * @function verify
             * @memberof RovState.BarometerState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BarometerState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };
    
            /**
             * Creates a BarometerState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RovState.BarometerState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Telemetry.BarometerState} BarometerState
             */
            BarometerState.fromObject = function fromObject(object) {
                if (object instanceof $root.Telemetry.BarometerState)
                    return object;
                var message = new $root.Telemetry.BarometerState();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a BarometerState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RovState.BarometerState
             * @static
             * @param {Telemetry.BarometerState} message BarometerState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BarometerState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };
    
            /**
             * Converts this BarometerState to JSON.
             * @function toJSON
             * @memberof RovState.BarometerState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BarometerState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return BarometerState;
        })();
    
        Telemetry.CompassState = (function() {
    
            /**
             * Properties of a CompassState.
             * @memberof RovState
             * @interface ICompassState
             * @property {number|null} [heading] CompassState heading
             */
    
            /**
             * Constructs a new CompassState.
             * @memberof RovState
             * @classdesc Represents a CompassState.
             * @implements ICompassState
             * @constructor
             * @param {Telemetry.ICompassState=} [properties] Properties to set
             */
            function CompassState(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompassState heading.
             * @member {number} heading
             * @memberof RovState.CompassState
             * @instance
             */
            CompassState.prototype.heading = 0;
    
            /**
             * Creates a new CompassState instance using the specified properties.
             * @function create
             * @memberof RovState.CompassState
             * @static
             * @param {Telemetry.ICompassState=} [properties] Properties to set
             * @returns {Telemetry.CompassState} CompassState instance
             */
            CompassState.create = function create(properties) {
                return new CompassState(properties);
            };
    
            /**
             * Encodes the specified CompassState message. Does not implicitly {@link Telemetry.CompassState.verify|verify} messages.
             * @function encode
             * @memberof RovState.CompassState
             * @static
             * @param {Telemetry.ICompassState} message CompassState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompassState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.heading != null && message.hasOwnProperty("heading"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.heading);
                return writer;
            };
    
            /**
             * Encodes the specified CompassState message, length delimited. Does not implicitly {@link Telemetry.CompassState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RovState.CompassState
             * @static
             * @param {Telemetry.ICompassState} message CompassState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CompassState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a CompassState message from the specified reader or buffer.
             * @function decode
             * @memberof RovState.CompassState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Telemetry.CompassState} CompassState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompassState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.CompassState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.heading = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a CompassState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RovState.CompassState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Telemetry.CompassState} CompassState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CompassState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a CompassState message.
             * @function verify
             * @memberof RovState.CompassState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CompassState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.heading != null && message.hasOwnProperty("heading"))
                    if (!$util.isInteger(message.heading))
                        return "heading: integer expected";
                return null;
            };
    
            /**
             * Creates a CompassState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RovState.CompassState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Telemetry.CompassState} CompassState
             */
            CompassState.fromObject = function fromObject(object) {
                if (object instanceof $root.Telemetry.CompassState)
                    return object;
                var message = new $root.Telemetry.CompassState();
                if (object.heading != null)
                    message.heading = object.heading | 0;
                return message;
            };
    
            /**
             * Creates a plain object from a CompassState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RovState.CompassState
             * @static
             * @param {Telemetry.CompassState} message CompassState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CompassState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.heading = 0;
                if (message.heading != null && message.hasOwnProperty("heading"))
                    object.heading = message.heading;
                return object;
            };
    
            /**
             * Converts this CompassState to JSON.
             * @function toJSON
             * @memberof RovState.CompassState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CompassState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return CompassState;
        })();
    
        Telemetry.AnalogStickState = (function() {
    
            /**
             * Properties of an AnalogStickState.
             * @memberof RovState
             * @interface IAnalogStickState
             * @property {Array.<Telemetry.AnalogStickState.IAnalogAxis>|null} [axes] AnalogStickState axes
             */
    
            /**
             * Constructs a new AnalogStickState.
             * @memberof RovState
             * @classdesc Represents an AnalogStickState.
             * @implements IAnalogStickState
             * @constructor
             * @param {Telemetry.IAnalogStickState=} [properties] Properties to set
             */
            function AnalogStickState(properties) {
                this.axes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AnalogStickState axes.
             * @member {Array.<Telemetry.AnalogStickState.IAnalogAxis>} axes
             * @memberof RovState.AnalogStickState
             * @instance
             */
            AnalogStickState.prototype.axes = $util.emptyArray;
    
            /**
             * Creates a new AnalogStickState instance using the specified properties.
             * @function create
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Telemetry.IAnalogStickState=} [properties] Properties to set
             * @returns {Telemetry.AnalogStickState} AnalogStickState instance
             */
            AnalogStickState.create = function create(properties) {
                return new AnalogStickState(properties);
            };
    
            /**
             * Encodes the specified AnalogStickState message. Does not implicitly {@link Telemetry.AnalogStickState.verify|verify} messages.
             * @function encode
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Telemetry.IAnalogStickState} message AnalogStickState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AnalogStickState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.axes != null && message.axes.length)
                    for (var i = 0; i < message.axes.length; ++i)
                        $root.Telemetry.AnalogStickState.AnalogAxis.encode(message.axes[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified AnalogStickState message, length delimited. Does not implicitly {@link Telemetry.AnalogStickState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Telemetry.IAnalogStickState} message AnalogStickState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AnalogStickState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an AnalogStickState message from the specified reader or buffer.
             * @function decode
             * @memberof RovState.AnalogStickState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Telemetry.AnalogStickState} AnalogStickState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnalogStickState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.AnalogStickState();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.axes && message.axes.length))
                            message.axes = [];
                        message.axes.push($root.Telemetry.AnalogStickState.AnalogAxis.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an AnalogStickState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof RovState.AnalogStickState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Telemetry.AnalogStickState} AnalogStickState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnalogStickState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an AnalogStickState message.
             * @function verify
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AnalogStickState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.axes != null && message.hasOwnProperty("axes")) {
                    if (!Array.isArray(message.axes))
                        return "axes: array expected";
                    for (var i = 0; i < message.axes.length; ++i) {
                        var error = $root.Telemetry.AnalogStickState.AnalogAxis.verify(message.axes[i]);
                        if (error)
                            return "axes." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates an AnalogStickState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Telemetry.AnalogStickState} AnalogStickState
             */
            AnalogStickState.fromObject = function fromObject(object) {
                if (object instanceof $root.Telemetry.AnalogStickState)
                    return object;
                var message = new $root.Telemetry.AnalogStickState();
                if (object.axes) {
                    if (!Array.isArray(object.axes))
                        throw TypeError(".RovState.AnalogStickState.axes: array expected");
                    message.axes = [];
                    for (var i = 0; i < object.axes.length; ++i) {
                        if (typeof object.axes[i] !== "object")
                            throw TypeError(".RovState.AnalogStickState.axes: object expected");
                        message.axes[i] = $root.Telemetry.AnalogStickState.AnalogAxis.fromObject(object.axes[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from an AnalogStickState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof RovState.AnalogStickState
             * @static
             * @param {Telemetry.AnalogStickState} message AnalogStickState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AnalogStickState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.axes = [];
                if (message.axes && message.axes.length) {
                    object.axes = [];
                    for (var j = 0; j < message.axes.length; ++j)
                        object.axes[j] = $root.Telemetry.AnalogStickState.AnalogAxis.toObject(message.axes[j], options);
                }
                return object;
            };
    
            /**
             * Converts this AnalogStickState to JSON.
             * @function toJSON
             * @memberof RovState.AnalogStickState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AnalogStickState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            AnalogStickState.AnalogAxis = (function() {
    
                /**
                 * Properties of an AnalogAxis.
                 * @memberof RovState.AnalogStickState
                 * @interface IAnalogAxis
                 * @property {string|null} [name] AnalogAxis name
                 * @property {number|null} [xPosition] AnalogAxis xPosition
                 * @property {number|null} [yPosition] AnalogAxis yPosition
                 * @property {number|null} [angleDegrees] AnalogAxis angleDegrees
                 * @property {number|null} [angleRadians] AnalogAxis angleRadians
                 */
    
                /**
                 * Constructs a new AnalogAxis.
                 * @memberof RovState.AnalogStickState
                 * @classdesc Represents an AnalogAxis.
                 * @implements IAnalogAxis
                 * @constructor
                 * @param {Telemetry.AnalogStickState.IAnalogAxis=} [properties] Properties to set
                 */
                function AnalogAxis(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * AnalogAxis name.
                 * @member {string} name
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 */
                AnalogAxis.prototype.name = "";
    
                /**
                 * AnalogAxis xPosition.
                 * @member {number} xPosition
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 */
                AnalogAxis.prototype.xPosition = 0;
    
                /**
                 * AnalogAxis yPosition.
                 * @member {number} yPosition
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 */
                AnalogAxis.prototype.yPosition = 0;
    
                /**
                 * AnalogAxis angleDegrees.
                 * @member {number} angleDegrees
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 */
                AnalogAxis.prototype.angleDegrees = 0;
    
                /**
                 * AnalogAxis angleRadians.
                 * @member {number} angleRadians
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 */
                AnalogAxis.prototype.angleRadians = 0;
    
                /**
                 * Creates a new AnalogAxis instance using the specified properties.
                 * @function create
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Telemetry.AnalogStickState.IAnalogAxis=} [properties] Properties to set
                 * @returns {Telemetry.AnalogStickState.AnalogAxis} AnalogAxis instance
                 */
                AnalogAxis.create = function create(properties) {
                    return new AnalogAxis(properties);
                };
    
                /**
                 * Encodes the specified AnalogAxis message. Does not implicitly {@link Telemetry.AnalogStickState.AnalogAxis.verify|verify} messages.
                 * @function encode
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Telemetry.AnalogStickState.IAnalogAxis} message AnalogAxis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AnalogAxis.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.xPosition != null && message.hasOwnProperty("xPosition"))
                        writer.uint32(/* id 2, wireType 5 =*/21).float(message.xPosition);
                    if (message.yPosition != null && message.hasOwnProperty("yPosition"))
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.yPosition);
                    if (message.angleDegrees != null && message.hasOwnProperty("angleDegrees"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.angleDegrees);
                    if (message.angleRadians != null && message.hasOwnProperty("angleRadians"))
                        writer.uint32(/* id 5, wireType 5 =*/45).float(message.angleRadians);
                    return writer;
                };
    
                /**
                 * Encodes the specified AnalogAxis message, length delimited. Does not implicitly {@link Telemetry.AnalogStickState.AnalogAxis.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Telemetry.AnalogStickState.IAnalogAxis} message AnalogAxis message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AnalogAxis.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an AnalogAxis message from the specified reader or buffer.
                 * @function decode
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Telemetry.AnalogStickState.AnalogAxis} AnalogAxis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AnalogAxis.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Telemetry.AnalogStickState.AnalogAxis();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.xPosition = reader.float();
                            break;
                        case 3:
                            message.yPosition = reader.float();
                            break;
                        case 4:
                            message.angleDegrees = reader.int32();
                            break;
                        case 5:
                            message.angleRadians = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an AnalogAxis message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Telemetry.AnalogStickState.AnalogAxis} AnalogAxis
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AnalogAxis.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an AnalogAxis message.
                 * @function verify
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AnalogAxis.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.xPosition != null && message.hasOwnProperty("xPosition"))
                        if (typeof message.xPosition !== "number")
                            return "xPosition: number expected";
                    if (message.yPosition != null && message.hasOwnProperty("yPosition"))
                        if (typeof message.yPosition !== "number")
                            return "yPosition: number expected";
                    if (message.angleDegrees != null && message.hasOwnProperty("angleDegrees"))
                        if (!$util.isInteger(message.angleDegrees))
                            return "angleDegrees: integer expected";
                    if (message.angleRadians != null && message.hasOwnProperty("angleRadians"))
                        if (typeof message.angleRadians !== "number")
                            return "angleRadians: number expected";
                    return null;
                };
    
                /**
                 * Creates an AnalogAxis message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Telemetry.AnalogStickState.AnalogAxis} AnalogAxis
                 */
                AnalogAxis.fromObject = function fromObject(object) {
                    if (object instanceof $root.Telemetry.AnalogStickState.AnalogAxis)
                        return object;
                    var message = new $root.Telemetry.AnalogStickState.AnalogAxis();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.xPosition != null)
                        message.xPosition = Number(object.xPosition);
                    if (object.yPosition != null)
                        message.yPosition = Number(object.yPosition);
                    if (object.angleDegrees != null)
                        message.angleDegrees = object.angleDegrees | 0;
                    if (object.angleRadians != null)
                        message.angleRadians = Number(object.angleRadians);
                    return message;
                };
    
                /**
                 * Creates a plain object from an AnalogAxis message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @static
                 * @param {Telemetry.AnalogStickState.AnalogAxis} message AnalogAxis
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AnalogAxis.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.xPosition = 0;
                        object.yPosition = 0;
                        object.angleDegrees = 0;
                        object.angleRadians = 0;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.xPosition != null && message.hasOwnProperty("xPosition"))
                        object.xPosition = options.json && !isFinite(message.xPosition) ? String(message.xPosition) : message.xPosition;
                    if (message.yPosition != null && message.hasOwnProperty("yPosition"))
                        object.yPosition = options.json && !isFinite(message.yPosition) ? String(message.yPosition) : message.yPosition;
                    if (message.angleDegrees != null && message.hasOwnProperty("angleDegrees"))
                        object.angleDegrees = message.angleDegrees;
                    if (message.angleRadians != null && message.hasOwnProperty("angleRadians"))
                        object.angleRadians = options.json && !isFinite(message.angleRadians) ? String(message.angleRadians) : message.angleRadians;
                    return object;
                };
    
                /**
                 * Converts this AnalogAxis to JSON.
                 * @function toJSON
                 * @memberof RovState.AnalogStickState.AnalogAxis
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AnalogAxis.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return AnalogAxis;
            })();
    
            return AnalogStickState;
        })();
    
        return Telemetry;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|Long|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number|Long} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Creates a new Timestamp instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp=} [properties] Properties to set
                 * @returns {google.protobuf.Timestamp} Timestamp instance
                 */
                Timestamp.create = function create(properties) {
                    return new Timestamp(properties);
                };
    
                /**
                 * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                    return writer;
                };
    
                /**
                 * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.seconds = reader.int64();
                            break;
                        case 2:
                            message.nanos = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Timestamp message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Timestamp} Timestamp
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Timestamp.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Timestamp message.
                 * @function verify
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Timestamp.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                            return "seconds: integer|Long expected";
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        if (!$util.isInteger(message.nanos))
                            return "nanos: integer expected";
                    return null;
                };
    
                /**
                 * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Timestamp} Timestamp
                 */
                Timestamp.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Timestamp)
                        return object;
                    var message = new $root.google.protobuf.Timestamp();
                    if (object.seconds != null)
                        if ($util.Long)
                            (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                        else if (typeof object.seconds === "string")
                            message.seconds = parseInt(object.seconds, 10);
                        else if (typeof object.seconds === "number")
                            message.seconds = object.seconds;
                        else if (typeof object.seconds === "object")
                            message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                    if (object.nanos != null)
                        message.nanos = object.nanos | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {google.protobuf.Timestamp} message Timestamp
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Timestamp.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.seconds = options.longs === String ? "0" : 0;
                        object.nanos = 0;
                    }
                    if (message.seconds != null && message.hasOwnProperty("seconds"))
                        if (typeof message.seconds === "number")
                            object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                        else
                            object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                    if (message.nanos != null && message.hasOwnProperty("nanos"))
                        object.nanos = message.nanos;
                    return object;
                };
    
                /**
                 * Converts this Timestamp to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Timestamp.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
