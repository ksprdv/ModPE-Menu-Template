// made by ksprdv in 2024

var btn = null;
var menu = null;
var closeBtn = null;

function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function createButton(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        var layout = new android.widget.LinearLayout(ctx);
        layout.setOrientation(1);
        var menuBtn = new android.widget.Button(ctx);
        menuBtn.setText('Menu');
        menuBtn.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                if (menu == null){
                    main();
                }
                if (closeBtn == null){
                    closeButton();
                }
            }
        }));
        layout.addView(menuBtn);
        btn = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
        btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 10, 20);
    }}));
}

function closeButton(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        var layout = new android.widget.LinearLayout(ctx);
        var button = new android.widget.Button(ctx);
        button.setText('x');
        button.setTextColor(android.graphics.Color.WHITE);
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                if(menu != null){
                    menu.dismiss();
                    menu = null;
                }
                if(closeBtn != null){
                    closeBtn.dismiss();
                    closeBtn = null;
                }
                createButton();
            }
        }));
        layout.addView(button);
        closeBtn = new android.widget.PopupWindow(layout, dip2px(40), dip2px(40));
        closeBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
        closeBtn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }}));
}

function main(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        var menuLayout = new android.widget.LinearLayout(ctx);
        var menuScroll = new android.widget.ScrollView(ctx);
        var menuLayout1 = new android.widget.LinearLayout(ctx);
        menuLayout.setOrientation(1);
        menuLayout1.setOrientation(1);
        menuScroll.addView(menuLayout);
        menuLayout1.addView(menuScroll);
    
        // TextView
        var note = new android.widget.TextView(ctx); 
        note.setText("Button"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        // Button
        var button = new android.widget.Button(ctx);
        button.setText('Creative');
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                Level.setGameMode(1);
            }
        }));
        menuLayout.addView(button);

        var note = new android.widget.TextView(ctx); 
        note.setText("Button - Toggle"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);
    
        var button = new android.widget.Button(ctx);
        button.setText('Change GameMode');
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                if (Level.getGameMode() == 1)
                {
                    Level.setGameMode(0);
                }else{
                    Level.setGameMode(1);
                }
            }
        }));
    
        menuLayout.addView(button);

        var note = new android.widget.TextView(ctx); 
        note.setText("Checkbox"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        // Checkbox
        var checked = false;
        var checkBox = new android.widget.CheckBox(ctx);
        checkBox.setText("Checked: " + (checked ? 'ON' : 'OFF'));
        checkBox.setTextColor(android.graphics.Color.WHITE);
        checkBox.setChecked(checked);
        checkBox.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                if(!checked){
                    checked = true;
                    }else{
                    checked = false;
                }
                checkBox.setText("Checked: " + (checked ? 'ON' : 'OFF'));
            }
        }));
        menuLayout.addView(checkBox);

        var note = new android.widget.TextView(ctx); 
        note.setText("Toggle"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        // Toggle
        var toggled = false;
        var toggle = new android.widget.ToggleButton(ctx);
        toggle.setChecked(toggled);
        toggle.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                if(!toggled){
                    toggled = true;
                }else{
                    toggled = false;
                }
            }
        }));
        menuLayout.addView(toggle);

        var note = new android.widget.TextView(ctx); 
        note.setText("EditText"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);     

        // Edit Text
        var eText = new android.widget.EditText(ctx);
        eText.setHint("Hello !");
        menuLayout.addView(eText);

        var note = new android.widget.TextView(ctx); 
        note.setText("Alert"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        // Alert
        var button = new android.widget.Button(ctx);
        button.setText('Alert');
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                var alert = new android.app.AlertDialog.Builder(ctx); 
                alert.setTitle("Dudka");
                var layout = new android.widget.LinearLayout(ctx);
                layout.setOrientation(1);
                
                var sethealth = new android.widget.EditText(ctx); 
                sethealth.setHint("Set Health"); 
                var params =new android.view.ViewGroup.LayoutParams(-2,-2);
                layout.addView(sethealth,params);
                alert.setView(layout);

                alert.setPositiveButton("Ok", new android.content.DialogInterface.OnClickListener(){ 
                    onClick: function(viewarg){
                        Player.setHealth(sethealth.getText().toString());
                    }
                });
                
                alert.setNegativeButton("None", new android.content.DialogInterface.OnClickListener(){ 
                    onClick: function(viewarg){
                    }
                });
                
                alert.setNeutralButton("Set time to night",new android.content.DialogInterface.OnClickListener(){ 
                    onClick: function(viewarg){
                        Level.setTime(13500);
                    }
                });
                
                var dialog = alert.create();
                dialog.show();
            }
        }));
        menuLayout.addView(button);

        var note = new android.widget.TextView(ctx); 
        note.setText("SeekBar"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        var t = 0;
        var sbp = new android.widget.SeekBar(ctx);
        sbp.setMax(2);
        sbp.setProgress(t);
        sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener(){
            onStopTrackingTouch: function(view){
                t = sbp.getProgress();
                if (t == 0)
                {
                    clientMessage("None");
                }
                if (t == 1)
                {
                    clientMessage("You is gay!");
                }
                if (t == 2)
                {
                    clientMessage("You is natural!");
                }
            }
        });
        menuLayout.addView(sbp);

        var note = new android.widget.TextView(ctx); 
        note.setText("Button"); 
        note.setTextColor(android.graphics.Color.WHITE);
        note.setTextSize(20);
        menuLayout.addView(note);

        // Button with toast message
        var button = new android.widget.Button(ctx);
        button.setText('Button with Toast');
        button.setOnClickListener(new android.view.View.OnClickListener({
            onClick: function(viewarg){
                android.widget.Toast.makeText(ctx, "Hello!", android.widget.Toast.LENGTH_SHORT).show();
            }
        }));
        menuLayout.addView(button);

        menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
        menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
        menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
    }}));
}

function newLevel(){
    if (btn == null){
        createButton();
    }
}

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(btn != null){
            btn.dismiss();
            btn = null;
        }
        if(menu != null){
            menu.dismiss();
            menu = null;
        }
        if(closeBtn != null){
            closeBtn.dismiss();
            closeBtn = null;
        }
    }}));
}
