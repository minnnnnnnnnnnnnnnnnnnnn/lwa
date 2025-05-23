$(() => 
{
    const a = "#zoom" ; 
    const a_a = " span:first-child" ; 
    const a_b = " span:not(:first-child):not(:last-child)" ; 
    const a_c = " span:last-child" ; 
    $( a + a_b ).css( "background-color" , "#fc0" ) ; 
    $( a + a_a ).on( "click" , ()=>
    {
        $( ":root" ).css( "zoom" , "85%" ) ; 
        $( a + a_a ).css( "background-color" , "#fc0" ) ; 
        $( a + a_b ).css( "background-color" , "#fff" ) ; 
        $( a + a_c ).css( "background-color" , "#fff" ) ; 
    });
    $( a + a_b ).on( "click" , ()=>
    {
        $( ":root" ).css( "zoom" , "100%" ) ; 
        $( a + a_b ).css( "background-color" , "#fc0" ) ; 
        $( a + a_a ).css( "background-color" , "#fff" ) ; 
        $( a + a_c ).css( "background-color" , "#fff" ) ; 
    });
    $( a + a_c ).on( "click" , ()=>
    {
        $( ":root" ).css( "zoom" , "115%" ) ; 
        $( a + a_c ).css( "background-color" , "#fc0" ) ; 
        $( a + a_a ).css( "background-color" , "#fff" ) ; 
        $( a + a_b ).css( "background-color" , "#fff" ) ; 
    });
});