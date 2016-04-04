for (cd3 = cd2; (max > 1) && ((cd3 == cd2) || (cd3 == cd1)); cd3 = rand(max));
  x = 0;
document.write('<a href="../artists/');
document.write (artist[cd3]);
document.writeln('">');
document.write ('<img src="../images/albums/');
document.write (album[cd3]);
document.writeln ('" border="0" alt=" " hspace="3" vspace="10" width="130" height="130" align="center"><\/a><br clear="all">');