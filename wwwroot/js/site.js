$(()=>
{
    var bool = 0 ; 
    if( $( window ).width() < 768 ) 
    {
        $( "header nav" ).hide() ; 
    }
    else 
    {
        bool = 1 ; 
    }
    $( window ).on( "resize" , () => 
    {
        if( $( window ).width() < 768 ) 
        {
            $( "header nav" ).hide() ; 
            $( "header .top > :last-child svg path" ).attr( "d" , "M3 12L21 12M3 6L21 6M3 18L21 18" ) ; 
            bool = 0 ; 
        }
        else 
        {
            $( "header nav" ).show() ; 
            bool = 1 ; 
        }
    } ) ; 
    $( "header .top > :last-child" ).on( "click" , () => 
    {
        if( bool == 0 ) 
        {
            $( "header nav" ).css( "display" , "" ) ; 
            $( "header .top > :last-child svg path" ).attr( "d" , "M18 6L6 18M6 6L18 18" ) ; 
            bool = 1 ; 
        }
        else 
        {
            bool = 0 ; 
            $( "header nav" ).css( "display" , "none" ) ; 
            $( "header .top > :last-child svg path" ).attr( "d" , "M3 12L21 12M3 6L21 6M3 18L21 18" ) ; 
        }
    });
});