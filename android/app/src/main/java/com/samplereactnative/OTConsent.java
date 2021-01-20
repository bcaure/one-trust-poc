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
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.onetrust.otpublishers.headless.Public.Keys.OTBroadcastServiceKeys;
import com.onetrust.otpublishers.headless.Public.OTCallback;
import com.onetrust.otpublishers.headless.Public.OTPublishersHeadlessSDK;
import com.onetrust.otpublishers.headless.Public.Response.OTResponse;
import com.onetrust.otpublishers.headless.UI.UIType;
public class OTConsent extends ReactContextBaseJavaModule {
    //constructor
    public OTConsent(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "OTConsent";
    }
    //Custom functions that we are going to export to JS
    @ReactMethod
    public void initializeConsent(Promise promise) {
        OTPublishersHeadlessSDK otPublishersHeadlessSDK = new OTPublishersHeadlessSDK(getReactApplicationContext());
        otPublishersHeadlessSDK.enableOTSDKLog(Log.VERBOSE);
        otPublishersHeadlessSDK.initOTSDKData("otcc-demo.otprivacy.com", "0e8fa22d-8446-414f-b807-d51ed7731234-test", "en", null, new OTCallback() {
            @Override
            public void onSuccess(@NonNull OTResponse otResponse) {
                Log.i("ReactBridge","Data Downloaded Successfully");
                OTPublishersHeadlessSDK ot = new OTPublishersHeadlessSDK(getReactApplicationContext());
                ot.setupUI((AppCompatActivity) getCurrentActivity(), UIType.BANNER);
                promise.resolve(ot.shouldShowBanner()); //returns the result of shouldShowBanner() when download is successful
            }

            @Override
            public void onFailure(@NonNull OTResponse otResponse) {
                Log.e("ReactBridge","Data Download Unsuccessful");
                promise.reject("-1","OT SDK Download Failed");
            }
        });
    }
    @ReactMethod
    public void loadPrefCenter(String UIType) {
        OTPublishersHeadlessSDK ot = new OTPublishersHeadlessSDK(getReactApplicationContext());
        Log.v("OT Debug", "Show UI Triggered with UIType = " + UIType);
        if (UIType.equals("prefCenter")) {
            Log.v("OT Debug", "PC Triggered");
            ot.showPreferenceCenterUI((AppCompatActivity) getCurrentActivity());
        } else if (UIType.equals("banner")) {
            ot.showBannerUI((AppCompatActivity) getCurrentActivity());
        }
    }

    //Setup for listening for consent broadcasts

    @ReactMethod
    public void listenForConsentChanges(){
        String[] categories = new String[]{"C0002", "C0003", "C0004"}; //Update with your categories
        for (String category:categories){
            getReactApplicationContext().registerReceiver(actionConsent, new IntentFilter(category));
        }
    }

    @ReactMethod
    public void stopListeningForConsentChanges(){
        getReactApplicationContext().unregisterReceiver(actionConsent);
    }


    BroadcastReceiver actionConsent = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                    .emit(intent.getAction(),intent.getIntExtra(OTBroadcastServiceKeys.EVENT_STATUS,-1));
        }
    };
}
