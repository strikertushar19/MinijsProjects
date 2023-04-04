function generate(){
    var quotes={
        "-Jules Renard":'“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.” ',
        "-Albert Einstein":'“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” ',
        "-Lana Del Ray":'Who are you ? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them? I have I am fucking crazy. But I am free.',
        "― Candace Bushnell ":'“Maybe some women are not meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them Carrie Bradshaw” ',
        " ― Madeline Miller, The Song of Achilles ":' “Bury us, and mark our names above. Let us be free.” ',
        " ― Alysha Speer ":'“You never really know what is coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.” '
    }
    var authors=Object.keys(quotes);
    var author =authors[Math.floor(Math.random() * authors.length)];
    var quote=quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}
