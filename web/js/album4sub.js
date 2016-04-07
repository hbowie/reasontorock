for (cd4 = cd3; (max > 1) && ((cd4 == cd3) || (cd4 == cd2) || (cd4 == cd1)); cd4 = rand(max));
  x = 0;
document.write('<a href="../artists/');
document.write (artist[cd4]);
document.writeln('">');
document.write ('<img class="img-responsive center-block shopItem" src="../images/albums/');
document.write (album[cd4]);
document.writeln ('" alt=" "><\/a>');
