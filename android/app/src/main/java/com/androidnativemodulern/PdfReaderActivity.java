package com.androidnativemodulern;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;

import com.github.barteksc.pdfviewer.PDFView;

public class PdfReaderActivity extends AppCompatActivity {

    private PDFView pdfView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pdf_reader);
        pdfView = findViewById(R.id.pdfView);

        Intent intent=   getIntent();
        if (intent!=null){
            Uri uri=Uri.parse(intent.getStringExtra("uri"));
            if (uri!=null){
                displayPdffromUri(uri);
            }
        }





    }

    private void displayPdffromUri(Uri uri) {

            pdfView.fromUri(uri).load();

    }
}