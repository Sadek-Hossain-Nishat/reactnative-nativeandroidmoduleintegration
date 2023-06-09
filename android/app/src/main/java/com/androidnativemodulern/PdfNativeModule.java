package com.androidnativemodulern;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class PdfNativeModule extends ReactContextBaseJavaModule {


    public PdfNativeModule(ReactApplicationContext context) {

        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "PdfNativeModule";
    }


    @ReactMethod
    public void sendLink(String link){


        Intent intent = new Intent(getCurrentActivity(),PdfReaderActivity.class);
        intent.putExtra("uri",link);
        getCurrentActivity().startActivity(intent);







    }















}
