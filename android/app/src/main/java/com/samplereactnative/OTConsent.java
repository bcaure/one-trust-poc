package com.samplereactnative;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.onetrust.otpublishers.headless.Public.Keys.OTBroadcastServiceKeys;
import com.onetrust.otpublishers.headless.Public.OTCallback;
import com.onetrust.otpublishers.headless.Public.OTEventListener;
import com.onetrust.otpublishers.headless.Public.OTPublishersHeadlessSDK;
import com.onetrust.otpublishers.headless.Public.Response.OTResponse;
import com.onetrust.otpublishers.headless.UI.UIType;

import java.util.Arrays;

public class OTConsent extends ReactContextBaseJavaModule {

    public OTConsent(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    // Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "OTConsent";
    }
    // Custom functions that we are going to export to JS
    @ReactMethod
    public void initializeConsent(Promise promise) {
        OTPublishersHeadlessSDK otPublishersHeadlessSDK = new OTPublishersHeadlessSDK(getReactApplicationContext());
        otPublishersHeadlessSDK.enableOTSDKLog(Log.INFO);
        final String location = "cdn.cookielaw.org";
        Log.i(getName(), "Init SDK from " + location);
        otPublishersHeadlessSDK.initOTSDKData(location, "b580358c-65e6-4577-a05b-f58f373793c1-test", "en", null, new OTCallback() {
            @Override
            public void onSuccess(@NonNull OTResponse otResponse) {
                Log.i(getName(),"Data Download Successfull - Setup UI");
                OTPublishersHeadlessSDK ot = new OTPublishersHeadlessSDK(getReactApplicationContext());
                //ot.setupUI((AppCompatActivity) getCurrentActivity(), UIType.BANNER);
                Log.i(getName(),"Setup UI Successfull - Resolve promise");
                final WritableNativeArray array = new WritableNativeArray();
                array.pushBoolean(ot.getConsentStatusForGroupId("C0002") == 1);
                array.pushBoolean(ot.getConsentStatusForGroupId("C0005") == 1);
                promise.resolve(array);
            }

            @Override
            public void onFailure(@NonNull OTResponse otResponse) {
                Log.e(getName(),"Data Download Unsuccessful");
                Log.e(getName(), otResponse.toString());
                promise.reject("-1","OT SDK Download Failed");
            }
        });
    }
    @ReactMethod
    public void loadPrefCenter(String UIType) {
        OTPublishersHeadlessSDK ot = new OTPublishersHeadlessSDK(getReactApplicationContext());
        Log.v(getName(), "Show UI Triggered with UIType = " + UIType);
        if (UIType.equals("prefCenter")) {
            Log.v(getName(), "PC Triggered");
            ot.showPreferenceCenterUI((AppCompatActivity) getCurrentActivity());
        } else if (UIType.equals("banner")) {
            ot.showBannerUI((AppCompatActivity) getCurrentActivity());
        }
    }

    // Setup for listening for consent broadcasts
    BroadcastReceiver actionConsent = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(intent.getAction(),intent.getIntExtra(OTBroadcastServiceKeys.EVENT_STATUS,-1));
        }
    };
    @ReactMethod
    public void listenForConsentChanges(){
        String[] categories = new String[]{"C0002", "C0005"}; //Update with your categories
        for (String category:categories){
            getReactApplicationContext().registerReceiver(actionConsent, new IntentFilter(category));
        }
    }

    // Setup for listening custom UI events
    @ReactMethod
    public void listenForUIEvents() {
        final ReactApplicationContext reactContext = getReactApplicationContext();
        OTPublishersHeadlessSDK otPublishersHeadlessSDK = new OTPublishersHeadlessSDK(reactContext);
        otPublishersHeadlessSDK.enableOTSDKLog(Log.VERBOSE);
        Log.v(getName(), "listenForUIEvents");
        otPublishersHeadlessSDK.addEventListener(new OTEventListener() {
        
            @Override
            public void onShowBanner() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("showBanner", null);
            }
        
            @Override
            public void onHideBanner() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("hideBanner", null);
            }
        
            @Override
            public void onBannerClickedAcceptAll() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("bannerClickedAcceptAll", null);
            }
            
            @Override
            public void onBannerClickedRejectAll() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("bannerClickedRejectAll", null);
            }
            
            @Override
            public void onShowPreferenceCenter() {
                Log.v(getName(), "onShowPreferenceCenter");
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("showPreferenceCenter", null);
            }
            
            @Override
            public void onHidePreferenceCenter() {
                Log.v(getName(), "onHidePreferenceCenter");
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("hidePreferenceCenter", null);
            }
            
            @Override
            public void onPreferenceCenterAcceptAll() {
                Log.v(getName(), "preferenceCenterAcceptAll");
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("preferenceCenterAcceptAll", null);
            }
            
            @Override
            public void onPreferenceCenterRejectAll() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("preferenceCenterRejectAll", null);
            }
            
            @Override
            public void onPreferenceCenterConfirmChoices() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("preferenceCenterConfirmChoices", null);
            }
            
            @Override
            public void onShowVendorList() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("showVendorList", null);
            }
            
            @Override
            public void onHideVendorList() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("hideVendorList", null);
            }
            
            @Override
            public void onVendorConfirmChoices() {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("vendorConfirmChoices", null);
            }
            
            @Override
            public void onVendorListVendorConsentChanged(String vendorId, int consentStatus) {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("vendorListVendorConsentChanged", null);
            }
            
            @Override
            public void onVendorListVendorLegitimateInterestChanged(String vendorId, int legitInterest) {
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("vendorListVendorLegitimateInterestChanged", null);
            }
            
            @Override
            public void onPreferenceCenterPurposeConsentChanged(String purposeId, int consentStatus) {
                Log.v(getName(), "onPreferenceCenterPurposeConsentChanged");
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("preferenceCenterPurposeConsentChanged", null);
            }
            
            @Override
            public void onPreferenceCenterPurposeLegitimateInterestChanged(String purposeId, int legitInterest) {
                Log.v(getName(), "onPreferenceCenterPurposeLegitimateInterestChanged");
                reactContext
                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit("preferenceCenterPurposeLegitimateInterestChanged", null);
            }
        });
    }
    

    @ReactMethod
    public void stopListeningForConsentChanges(){
        getReactApplicationContext().unregisterReceiver(actionConsent);
    }


}
