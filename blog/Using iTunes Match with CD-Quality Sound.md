Title:  Using iTunes Match with CD-Quality Sound

Date:   Tue Jul 17, 2012

Status: 4 - Active

Tags:   Apple, Mac, Music, ReasonToRock

Teaser: 
 
<p>I finally took the plunge into iTunes Match a few weeks ago. It&#8217;s not like me to sit on the sidelines for so long when Apple produces some cool new technology, but to tell the truth, I had a hard time understanding what it would do for me. Most of the coverage I had read seemed to assume I was starting with tracks encumbered with Digital Rights Management (DRM), or encoded at a relatively meager 128-kbps, and that I would hence benefit from the higher quality and relatively promiscuous tracks (256-kbps DRM-free AAC files) available from iTunes Match. </p><br><br><p>Unlike many, I suppose, I had the opposite situation: for many years now, most of the audio in my collection has been ripped from CDs into the Apple Lossless format. I&#8217;ve then meticulously converted each of these Hi-Fi tracks into lower-fidelity but smaller tracks that would fit more easily onto my iPod, iPhone and/or iPad. Both sets of tracks have coexisted more or less amicably inside of a single Media folder located on a networked hard drive. This arrangement has served me fairly well for years, giving me access to CD-quality sound at home, and lower fidelity but still serviceable audio when I&#8217;m out and about. So I struggled to figure out what iTunes Match could do for me. </p><br><br><p>Then, one recent day, I said &#8220;What the heck, let&#8217;s give it a whirl. For only $25 per year, it&#8217;s worth a try.&#8221;</p><br><br><p>Here, then, is my tale. </p>


Body:   
 
<p><a href="http://www.signals.com/cgi-bin/hazel.cgi?action=DETAIL&ITEM=HA2022"><img class="img-top-right" src="../images/cd-cabinet.jpg" alt="CD Storage Cabinet" title="CD Storage Cabinet" /></a></p>

I finally took the plunge into [iTunes Match][] a few weeks ago. It's not like me to sit on the sidelines for so long when Apple produces some cool new technology, but to tell the truth, I had a hard time understanding what it would do for me. Most of the coverage I had read (such as [this introductory piece at Macworld][macworld]) seemed to assume I was starting with tracks encumbered with Digital Rights Management (DRM), or encoded at a relatively meager 128-kbps, and that I would hence benefit from the higher quality and relatively promiscuous tracks (256-kbps DRM-free AAC files) available from iTunes Match.

Unlike many, I suppose, I had the opposite situation: for many years now, most of the audio in my collection has been ripped from CDs into the [Apple Lossless][] format. I've then meticulously converted each of these [Hi-Fi][] tracks into lower-fidelity but smaller tracks that would fit more easily onto my iPod, iPhone and/or iPad. Both sets of tracks have coexisted more or less amicably inside of a single Media folder located on a networked hard drive. This arrangement has served me fairly well for years, giving me access to CD-quality sound at home, and lower fidelity but still serviceable audio when I'm out and about. So I struggled to figure out what iTunes Match could do for me.

Then, one recent day, I said "What the heck, let's give it a whirl. For only $25 per year, it's worth a try."

Here, then, is my tale.

The first thing I did, of course, was to back up my current iTunes library and media onto a second hard drive, in case something went awry.

Then I purchased iTunes Match, turned it on, and let it do its matching and uploading. This took the better part of a 24-hour day.

Next, I wanted to try creating a second iTunes library. Having both hi-fi and lo-fi tracks in a single media folder stored on a networked hard drive has some disadvantages. First, it requires some trickery to play the music you want to hear without inadvertently having to hear everything twice (appropriate, perhaps, for Bob Dylan's "Stuck Inside of Mobile with the Memphis Blues Again," but not generally a good thing). The second problem with having everything on an external drive was that I had no serviceable iTunes library when I went mobile with my MacBook Pro, which made using the Mac to sync and charge my iOS devices somewhat problematic.

So, I figured, maybe it was time to move my lo-fi tracks into a media folder of their own, one stored on my internal hard drive, and just keep the hi-fi tracks on my networked drive.

But how to manage multiple iTunes libraries on a single Mac? iTunes itself allows you to select a library by holding down the option key when it's launched, but here you run into a problem: iTunes considers a library to be a list of tracks and other content -- not a folder that happens to contain all of the music and other media accessible from the library. So selecting a different library does not change the media folder you last selected on the Advanced tab of your iTunes preferences. So that was really no good for my purposes, since I wanted to painlessly manage not only two libraries, but two media folders.

Here I began to search for a third-party app that might help out in this department. I had tried a variety of such tools in the past, but had found them to be either unreliable or designed for some slightly different purpose (such as managing multiple iTunes libraries on multiple Macs).

But then I stumbled across [PowerTunes][], from Fat Cat Software, and it exactly met my needs. It keeps track of multiple iTunes libraries, along with a separate media folder for each, and allows you to easily switch between them. Score!

Once I had created a new iTunes library, allocated a new media folder for it, and then added that to PowerTunes, I then enabled it for iTunes Match, and tried downloading an album. It was only then I noticed that, when running iTunes Match on my old library, it had treated my hi-fi version and lo-fi versions as separate tracks! I guess I had assumed it would be "smarter" than that, but looking back on it, I had no real reason for making such an assumption.

Back to the drawing board. Using PowerTunes, I switched to my old library, and then deleted all the duplicate lo-fi tracks from it. I was asked whether I wanted to delete them from iCloud, and from my media folder, and after answering "Yes" to both, and waiting a suitable period of time, the duplicates were gone.

Now I switched back to my new library and saw that the duplicate iCloud entries were indeed gone from there as well. I then downloaded my entire iCloud library to my new media folder. This was another time-consuming process, but once completed, I had a lo-fi equivalent of my library. Voila! It took me a while to get the new library set up with the other content I needed for syncing iPhone and iPad (ring tones, videos, apps, etc.), but once that was done, everything seemed to be working as I would like.

In fact, the new arrangement is now performing like a champ -- better than the old setup ever did. Here's how it all works.

1. As part of my [startup script][startup] that runs every morning, I tell PowerTunes to launch the lo-fi library resident on my internal hard drive. This ensures that when I'm syncing my iOS devices, they're consistently syncing to that same library every time.

2. When I want to listen to hi-fi tunes at home, I use PowerTunes to switch to my hi-fi library on my networked drive. I then stream from iTunes to my Apple TV which feeds my home stereo system.

3. When I've got a new CD, I rip it to the hi-fi library in Apple Lossless format. I then generally rate my tracks in this library, and define playlists in this library.

4. The next time I switch to my lo-fi library, the new album shows up there. I then download the new disc to the library on my internal hard drive. Ratings and playlists come along for the ride.

Voila! I've now got my music on two separate libraries, each serving its own purpose, and both kept in sync almost completely automatically by iTunes match. (Plus, of course, I've got a copy of all my tunes in the iCloud, making my complete library accessible from a device I can carry in my pocket.)

So for any other users out there in a similar situation, feel free to give iTunes match a try. Your mileage may vary, but it seems to offer some benefits that haven't been well advertised.

[iTunes Match]:   http://www.apple.com/itunes/itunes-match/
[Apple Lossless]: http://en.wikipedia.org/wiki/Apple_Lossless
[hi-fi]:          http://en.wikipedia.org/wiki/High_fidelity
[powertunes]:     http://www.fatcatsoftware.com/powertunes/
[macworld]:       http://www.macworld.com/article/1163658/itunes_match_what_you_need_to_know.html
[startup]:        http://www.pagantuna.com/posts/adaptive-startup-for-the-mac.html


