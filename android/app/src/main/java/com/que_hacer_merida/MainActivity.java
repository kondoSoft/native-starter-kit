package com.que_hacer_merida;

import android.graphics.Color;
import android.os.Bundle;


import com.facebook.react.ReactActivity;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.mehcode.reactnative.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Que_Hacer_Merida";
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        // Show the js-controlled splash screen
        SplashScreen.show(this, getReactInstanceManager());

        super.onCreate(savedInstanceState);

    }

}
