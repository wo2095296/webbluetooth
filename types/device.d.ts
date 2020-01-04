import { TypedDispatcher } from "./dispatcher";
import { Bluetooth } from "./bluetooth";
import { BluetoothRemoteGATTServer } from "./server";
import { BluetoothRemoteGATTServiceEvents } from "./service";
import { W3CBluetoothDevice } from "./interfaces";
/**
 * @hidden
 */
export interface BluetoothDeviceEvents extends BluetoothRemoteGATTServiceEvents {
    /**
     * GATT server disconnected event
     */
    gattserverdisconnected: Event;
    /**
     * Advertisement received event
     */
    advertisementreceived: Event;
}
declare const BluetoothDevice_base: new () => TypedDispatcher<BluetoothDeviceEvents>;
/**
 * Bluetooth Device class
 */
export declare class BluetoothDevice extends BluetoothDevice_base implements W3CBluetoothDevice {
    /**
     * The unique identifier of the device
     */
    readonly id: string;
    /**
     * The name of the device
     */
    readonly name: string;
    /**
     * The gatt server of the device
     */
    readonly gatt: BluetoothRemoteGATTServer;
    /**
     * Whether adverts are being watched (not implemented)
     */
    readonly watchingAdvertisements: boolean;
    /**
     * @hidden
     */
    readonly adData: {
        rssi?: number;
        txPower?: number;
        serviceData?: Map<string, DataView>;
        manufacturerData?: Map<string, DataView>;
    };
    /**
     * @hidden
     */
    readonly _bluetooth: Bluetooth;
    /**
     * @hidden
     */
    readonly _allowedServices: Array<string>;
    /**
     * @hidden
     */
    readonly _serviceUUIDs: Array<string>;
    private _oncharacteristicvaluechanged;
    oncharacteristicvaluechanged: (ev: Event) => void;
    private _onserviceadded;
    onserviceadded: (ev: Event) => void;
    private _onservicechanged;
    onservicechanged: (ev: Event) => void;
    private _onserviceremoved;
    onserviceremoved: (ev: Event) => void;
    private _ongattserverdisconnected;
    ongattserverdisconnected: (ev: Event) => void;
    private _onadvertisementreceived;
    onadvertisementreceived: (ev: Event) => void;
    /**
     * Device constructor
     * @param init A partial class to initialise values
     */
    constructor(init: Partial<BluetoothDevice>);
    /**
     * Starts watching adverts from this device (not implemented)
     */
    watchAdvertisements(): Promise<void>;
    /**
     * Stops watching adverts from this device (not implemented)
     */
    unwatchAdvertisements(): Promise<{}>;
}
export {};
