let TEST_ADD_BITS = [
      0x3776d5f5, 0x5634e2db, 0x7fefffff, 0xffffffff, 0xb766d5f5, 0x5634e2da,
      0x7ff00000, 0x00000000, 0xb766d5f5, 0x5634e2db, 0xffdfffff, 0xffffffff,
      0x7ffeffff, 0xffffffff, 0xb775d5f5, 0x5634e2da, 0xffeeffff, 0xfffffffe,
      0xffeeffff, 0xffffffff, 0x7fff0000, 0x00000000, 0xb775d5f5, 0x5634e2db,
      0xffeeffff, 0xffffffff, 0xffef0000, 0x00000000, 0xfffdffff, 0xffffffff,
      0x7ffffffe, 0xffffffff, 0xb776d5f4, 0x5634e2da, 0xffeffffe, 0xfffffffe,
      0xffeffffe, 0xffffffff, 0xfffefffe, 0xfffffffe, 0xfffefffe, 0xffffffff,
      0x7fffffff, 0x00000000, 0xb776d5f4, 0x5634e2db, 0xffeffffe, 0xffffffff,
      0xffefffff, 0x00000000, 0xfffefffe, 0xffffffff, 0xfffeffff, 0x00000000,
      0xfffffffd, 0xffffffff, 0x7fffffff, 0xfeffffff, 0xb776d5f5, 0x5534e2da,
      0xffefffff, 0xfefffffe, 0xffefffff, 0xfeffffff, 0xfffeffff, 0xfefffffe,
      0xfffeffff, 0xfeffffff, 0xfffffffe, 0xfefffffe, 0xfffffffe, 0xfeffffff,
      0x7fffffff, 0xff000000, 0xb776d5f5, 0x5534e2db, 0xffefffff, 0xfeffffff,
      0xffefffff, 0xff000000, 0xfffeffff, 0xfeffffff, 0xfffeffff, 0xff000000,
      0xfffffffe, 0xfeffffff, 0xfffffffe, 0xff000000, 0xffffffff, 0xfdffffff,
      0x7fffffff, 0xfffeffff, 0xb776d5f5, 0x5633e2da, 0xffefffff, 0xfffefffe,
      0xffefffff, 0xfffeffff, 0xfffeffff, 0xfffefffe, 0xfffeffff, 0xfffeffff,
      0xfffffffe, 0xfffefffe, 0xfffffffe, 0xfffeffff, 0xffffffff, 0xfefefffe,
      0xffffffff, 0xfefeffff, 0x7fffffff, 0xffff0000, 0xb776d5f5, 0x5633e2db,
      0xffefffff, 0xfffeffff, 0xffefffff, 0xffff0000, 0xfffeffff, 0xfffeffff,
      0xfffeffff, 0xffff0000, 0xfffffffe, 0xfffeffff, 0xfffffffe, 0xffff0000,
      0xffffffff, 0xfefeffff, 0xffffffff, 0xfeff0000, 0xffffffff, 0xfffdffff,
      0x7fffffff, 0xffff7fff, 0xb776d5f5, 0x563462da, 0xffefffff, 0xffff7ffe,
      0xffefffff, 0xffff7fff, 0xfffeffff, 0xffff7ffe, 0xfffeffff, 0xffff7fff,
      0xfffffffe, 0xffff7ffe, 0xfffffffe, 0xffff7fff, 0xffffffff, 0xfeff7ffe,
      0xffffffff, 0xfeff7fff, 0xffffffff, 0xfffe7ffe, 0xffffffff, 0xfffe7fff,
      0x7fffffff, 0xffff8000, 0xb776d5f5, 0x563462db, 0xffefffff, 0xffff7fff,
      0xffefffff, 0xffff8000, 0xfffeffff, 0xffff7fff, 0xfffeffff, 0xffff8000,
      0xfffffffe, 0xffff7fff, 0xfffffffe, 0xffff8000, 0xffffffff, 0xfeff7fff,
      0xffffffff, 0xfeff8000, 0xffffffff, 0xfffe7fff, 0xffffffff, 0xfffe8000,
      0xffffffff, 0xfffeffff, 0x7fffffff, 0xfffffffe, 0xb776d5f5, 0x5634e2d9,
      0xffefffff, 0xfffffffd, 0xffefffff, 0xfffffffe, 0xfffeffff, 0xfffffffd,
      0xfffeffff, 0xfffffffe, 0xfffffffe, 0xfffffffd, 0xfffffffe, 0xfffffffe,
      0xffffffff, 0xfefffffd, 0xffffffff, 0xfefffffe, 0xffffffff, 0xfffefffd,
      0xffffffff, 0xfffefffe, 0xffffffff, 0xffff7ffd, 0xffffffff, 0xffff7ffe,
      0x7fffffff, 0xffffffff, 0xb776d5f5, 0x5634e2da, 0xffefffff, 0xfffffffe,
      0xffefffff, 0xffffffff, 0xfffeffff, 0xfffffffe, 0xfffeffff, 0xffffffff,
      0xfffffffe, 0xfffffffe, 0xfffffffe, 0xffffffff, 0xffffffff, 0xfefffffe,
      0xffffffff, 0xfeffffff, 0xffffffff, 0xfffefffe, 0xffffffff, 0xfffeffff,
      0xffffffff, 0xffff7ffe, 0xffffffff, 0xffff7fff, 0xffffffff, 0xfffffffd,
      0x80000000, 0x00000000, 0xb776d5f5, 0x5634e2db, 0xffefffff, 0xffffffff,
      0xfff00000, 0x00000000, 0xfffeffff, 0xffffffff, 0xffff0000, 0x00000000,
      0xfffffffe, 0xffffffff, 0xffffffff, 0x00000000, 0xffffffff, 0xfeffffff,
      0xffffffff, 0xff000000, 0xffffffff, 0xfffeffff, 0xffffffff, 0xffff0000,
      0xffffffff, 0xffff7fff, 0xffffffff, 0xffff8000, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xffffffff, 0x80000000, 0x00000001, 0xb776d5f5, 0x5634e2dc,
      0xfff00000, 0x00000000, 0xfff00000, 0x00000001, 0xffff0000, 0x00000000,
      0xffff0000, 0x00000001, 0xffffffff, 0x00000000, 0xffffffff, 0x00000001,
      0xffffffff, 0xff000000, 0xffffffff, 0xff000001, 0xffffffff, 0xffff0000,
      0xffffffff, 0xffff0001, 0xffffffff, 0xffff8000, 0xffffffff, 0xffff8001,
      0xffffffff, 0xffffffff, 0x00000000, 0x00000000, 0x00000000, 0x00000001,
      0x80000000, 0x00000002, 0xb776d5f5, 0x5634e2dd, 0xfff00000, 0x00000001,
      0xfff00000, 0x00000002, 0xffff0000, 0x00000001, 0xffff0000, 0x00000002,
      0xffffffff, 0x00000001, 0xffffffff, 0x00000002, 0xffffffff, 0xff000001,
      0xffffffff, 0xff000002, 0xffffffff, 0xffff0001, 0xffffffff, 0xffff0002,
      0xffffffff, 0xffff8001, 0xffffffff, 0xffff8002, 0x00000000, 0x00000000,
      0x00000000, 0x00000001, 0x00000000, 0x00000002, 0x00000000, 0x00000003,
      0x80000000, 0x00007fff, 0xb776d5f5, 0x563562da, 0xfff00000, 0x00007ffe,
      0xfff00000, 0x00007fff, 0xffff0000, 0x00007ffe, 0xffff0000, 0x00007fff,
      0xffffffff, 0x00007ffe, 0xffffffff, 0x00007fff, 0xffffffff, 0xff007ffe,
      0xffffffff, 0xff007fff, 0xffffffff, 0xffff7ffe, 0xffffffff, 0xffff7fff,
      0xffffffff, 0xfffffffe, 0xffffffff, 0xffffffff, 0x00000000, 0x00007ffd,
      0x00000000, 0x00007ffe, 0x00000000, 0x00007fff, 0x00000000, 0x00008000,
      0x00000000, 0x00008001, 0x80000000, 0x00008000, 0xb776d5f5, 0x563562db,
      0xfff00000, 0x00007fff, 0xfff00000, 0x00008000, 0xffff0000, 0x00007fff,
      0xffff0000, 0x00008000, 0xffffffff, 0x00007fff, 0xffffffff, 0x00008000,
      0xffffffff, 0xff007fff, 0xffffffff, 0xff008000, 0xffffffff, 0xffff7fff,
      0xffffffff, 0xffff8000, 0xffffffff, 0xffffffff, 0x00000000, 0x00000000,
      0x00000000, 0x00007ffe, 0x00000000, 0x00007fff, 0x00000000, 0x00008000,
      0x00000000, 0x00008001, 0x00000000, 0x00008002, 0x00000000, 0x0000ffff,
      0x80000000, 0x0000ffff, 0xb776d5f5, 0x5635e2da, 0xfff00000, 0x0000fffe,
      0xfff00000, 0x0000ffff, 0xffff0000, 0x0000fffe, 0xffff0000, 0x0000ffff,
      0xffffffff, 0x0000fffe, 0xffffffff, 0x0000ffff, 0xffffffff, 0xff00fffe,
      0xffffffff, 0xff00ffff, 0xffffffff, 0xfffffffe, 0xffffffff, 0xffffffff,
      0x00000000, 0x00007ffe, 0x00000000, 0x00007fff, 0x00000000, 0x0000fffd,
      0x00000000, 0x0000fffe, 0x00000000, 0x0000ffff, 0x00000000, 0x00010000,
      0x00000000, 0x00010001, 0x00000000, 0x00017ffe, 0x00000000, 0x00017fff,
      0x80000000, 0x00010000, 0xb776d5f5, 0x5635e2db, 0xfff00000, 0x0000ffff,
      0xfff00000, 0x00010000, 0xffff0000, 0x0000ffff, 0xffff0000, 0x00010000,
      0xffffffff, 0x0000ffff, 0xffffffff, 0x00010000, 0xffffffff, 0xff00ffff,
      0xffffffff, 0xff010000, 0xffffffff, 0xffffffff, 0x00000000, 0x00000000,
      0x00000000, 0x00007fff, 0x00000000, 0x00008000, 0x00000000, 0x0000fffe,
      0x00000000, 0x0000ffff, 0x00000000, 0x00010000, 0x00000000, 0x00010001,
      0x00000000, 0x00010002, 0x00000000, 0x00017fff, 0x00000000, 0x00018000,
      0x00000000, 0x0001ffff, 0x80000000, 0x00ffffff, 0xb776d5f5, 0x5734e2da,
      0xfff00000, 0x00fffffe, 0xfff00000, 0x00ffffff, 0xffff0000, 0x00fffffe,
      0xffff0000, 0x00ffffff, 0xffffffff, 0x00fffffe, 0xffffffff, 0x00ffffff,
      0xffffffff, 0xfffffffe, 0xffffffff, 0xffffffff, 0x00000000, 0x00fefffe,
      0x00000000, 0x00feffff, 0x00000000, 0x00ff7ffe, 0x00000000, 0x00ff7fff,
      0x00000000, 0x00fffffd, 0x00000000, 0x00fffffe, 0x00000000, 0x00ffffff,
      0x00000000, 0x01000000, 0x00000000, 0x01000001, 0x00000000, 0x01007ffe,
      0x00000000, 0x01007fff, 0x00000000, 0x0100fffe, 0x00000000, 0x0100ffff,
      0x80000000, 0x01000000, 0xb776d5f5, 0x5734e2db, 0xfff00000, 0x00ffffff,
      0xfff00000, 0x01000000, 0xffff0000, 0x00ffffff, 0xffff0000, 0x01000000,
      0xffffffff, 0x00ffffff, 0xffffffff, 0x01000000, 0xffffffff, 0xffffffff,
      0x00000000, 0x00000000, 0x00000000, 0x00feffff, 0x00000000, 0x00ff0000,
      0x00000000, 0x00ff7fff, 0x00000000, 0x00ff8000, 0x00000000, 0x00fffffe,
      0x00000000, 0x00ffffff, 0x00000000, 0x01000000, 0x00000000, 0x01000001,
      0x00000000, 0x01000002, 0x00000000, 0x01007fff, 0x00000000, 0x01008000,
      0x00000000, 0x0100ffff, 0x00000000, 0x01010000, 0x00000000, 0x01ffffff,
      0x80000000, 0x5634e2db, 0xb776d5f5, 0xac69c5b6, 0xfff00000, 0x5634e2da,
      0xfff00000, 0x5634e2db, 0xffff0000, 0x5634e2da, 0xffff0000, 0x5634e2db,
      0xffffffff, 0x5634e2da, 0xffffffff, 0x5634e2db, 0x00000000, 0x5534e2da,
      0x00000000, 0x5534e2db, 0x00000000, 0x5633e2da, 0x00000000, 0x5633e2db,
      0x00000000, 0x563462da, 0x00000000, 0x563462db, 0x00000000, 0x5634e2d9,
      0x00000000, 0x5634e2da, 0x00000000, 0x5634e2db, 0x00000000, 0x5634e2dc,
      0x00000000, 0x5634e2dd, 0x00000000, 0x563562da, 0x00000000, 0x563562db,
      0x00000000, 0x5635e2da, 0x00000000, 0x5635e2db, 0x00000000, 0x5734e2da,
      0x00000000, 0x5734e2db, 0x80000000, 0xb776d5f5, 0xb776d5f6, 0x0dabb8d0,
      0xfff00000, 0xb776d5f4, 0xfff00000, 0xb776d5f5, 0xffff0000, 0xb776d5f4,
      0xffff0000, 0xb776d5f5, 0xffffffff, 0xb776d5f4, 0xffffffff, 0xb776d5f5,
      0x00000000, 0xb676d5f4, 0x00000000, 0xb676d5f5, 0x00000000, 0xb775d5f4,
      0x00000000, 0xb775d5f5, 0x00000000, 0xb77655f4, 0x00000000, 0xb77655f5,
      0x00000000, 0xb776d5f3, 0x00000000, 0xb776d5f4, 0x00000000, 0xb776d5f5,
      0x00000000, 0xb776d5f6, 0x00000000, 0xb776d5f7, 0x00000000, 0xb77755f4,
      0x00000000, 0xb77755f5, 0x00000000, 0xb777d5f4, 0x00000000, 0xb777d5f5,
      0x00000000, 0xb876d5f4, 0x00000000, 0xb876d5f5, 0x00000001, 0x0dabb8d0,
      0x80000000, 0xffffffff, 0xb776d5f6, 0x5634e2da, 0xfff00000, 0xfffffffe,
      0xfff00000, 0xffffffff, 0xffff0000, 0xfffffffe, 0xffff0000, 0xffffffff,
      0xffffffff, 0xfffffffe, 0xffffffff, 0xffffffff, 0x00000000, 0xfefffffe,
      0x00000000, 0xfeffffff, 0x00000000, 0xfffefffe, 0x00000000, 0xfffeffff,
      0x00000000, 0xffff7ffe, 0x00000000, 0xffff7fff, 0x00000000, 0xfffffffd,
      0x00000000, 0xfffffffe, 0x00000000, 0xffffffff, 0x00000001, 0x00000000,
      0x00000001, 0x00000001, 0x00000001, 0x00007ffe, 0x00000001, 0x00007fff,
      0x00000001, 0x0000fffe, 0x00000001, 0x0000ffff, 0x00000001, 0x00fffffe,
      0x00000001, 0x00ffffff, 0x00000001, 0x5634e2da, 0x00000001, 0xb776d5f4,
      0x80000001, 0x00000000, 0xb776d5f6, 0x5634e2db, 0xfff00000, 0xffffffff,
      0xfff00001, 0x00000000, 0xffff0000, 0xffffffff, 0xffff0001, 0x00000000,
      0xffffffff, 0xffffffff, 0x00000000, 0x00000000, 0x00000000, 0xfeffffff,
      0x00000000, 0xff000000, 0x00000000, 0xfffeffff, 0x00000000, 0xffff0000,
      0x00000000, 0xffff7fff, 0x00000000, 0xffff8000, 0x00000000, 0xfffffffe,
      0x00000000, 0xffffffff, 0x00000001, 0x00000000, 0x00000001, 0x00000001,
      0x00000001, 0x00000002, 0x00000001, 0x00007fff, 0x00000001, 0x00008000,
      0x00000001, 0x0000ffff, 0x00000001, 0x00010000, 0x00000001, 0x00ffffff,
      0x00000001, 0x01000000, 0x00000001, 0x5634e2db, 0x00000001, 0xb776d5f5,
      0x00000001, 0xffffffff, 0x8000ffff, 0xffffffff, 0xb777d5f5, 0x5634e2da,
      0xfff0ffff, 0xfffffffe, 0xfff0ffff, 0xffffffff, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xffffffff, 0x0000fffe, 0xfffffffe, 0x0000fffe, 0xffffffff,
      0x0000ffff, 0xfefffffe, 0x0000ffff, 0xfeffffff, 0x0000ffff, 0xfffefffe,
      0x0000ffff, 0xfffeffff, 0x0000ffff, 0xffff7ffe, 0x0000ffff, 0xffff7fff,
      0x0000ffff, 0xfffffffd, 0x0000ffff, 0xfffffffe, 0x0000ffff, 0xffffffff,
      0x00010000, 0x00000000, 0x00010000, 0x00000001, 0x00010000, 0x00007ffe,
      0x00010000, 0x00007fff, 0x00010000, 0x0000fffe, 0x00010000, 0x0000ffff,
      0x00010000, 0x00fffffe, 0x00010000, 0x00ffffff, 0x00010000, 0x5634e2da,
      0x00010000, 0xb776d5f4, 0x00010000, 0xfffffffe, 0x00010000, 0xffffffff,
      0x80010000, 0x00000000, 0xb777d5f5, 0x5634e2db, 0xfff0ffff, 0xffffffff,
      0xfff10000, 0x00000000, 0xffffffff, 0xffffffff, 0x00000000, 0x00000000,
      0x0000fffe, 0xffffffff, 0x0000ffff, 0x00000000, 0x0000ffff, 0xfeffffff,
      0x0000ffff, 0xff000000, 0x0000ffff, 0xfffeffff, 0x0000ffff, 0xffff0000,
      0x0000ffff, 0xffff7fff, 0x0000ffff, 0xffff8000, 0x0000ffff, 0xfffffffe,
      0x0000ffff, 0xffffffff, 0x00010000, 0x00000000, 0x00010000, 0x00000001,
      0x00010000, 0x00000002, 0x00010000, 0x00007fff, 0x00010000, 0x00008000,
      0x00010000, 0x0000ffff, 0x00010000, 0x00010000, 0x00010000, 0x00ffffff,
      0x00010000, 0x01000000, 0x00010000, 0x5634e2db, 0x00010000, 0xb776d5f5,
      0x00010000, 0xffffffff, 0x00010001, 0x00000000, 0x0001ffff, 0xffffffff,
      0x800fffff, 0xffffffff, 0xb786d5f5, 0x5634e2da, 0xffffffff, 0xfffffffe,
      0xffffffff, 0xffffffff, 0x000effff, 0xfffffffe, 0x000effff, 0xffffffff,
      0x000ffffe, 0xfffffffe, 0x000ffffe, 0xffffffff, 0x000fffff, 0xfefffffe,
      0x000fffff, 0xfeffffff, 0x000fffff, 0xfffefffe, 0x000fffff, 0xfffeffff,
      0x000fffff, 0xffff7ffe, 0x000fffff, 0xffff7fff, 0x000fffff, 0xfffffffd,
      0x000fffff, 0xfffffffe, 0x000fffff, 0xffffffff, 0x00100000, 0x00000000,
      0x00100000, 0x00000001, 0x00100000, 0x00007ffe, 0x00100000, 0x00007fff,
      0x00100000, 0x0000fffe, 0x00100000, 0x0000ffff, 0x00100000, 0x00fffffe,
      0x00100000, 0x00ffffff, 0x00100000, 0x5634e2da, 0x00100000, 0xb776d5f4,
      0x00100000, 0xfffffffe, 0x00100000, 0xffffffff, 0x0010ffff, 0xfffffffe,
      0x0010ffff, 0xffffffff, 0x80100000, 0x00000000, 0xb786d5f5, 0x5634e2db,
      0xffffffff, 0xffffffff, 0x00000000, 0x00000000, 0x000effff, 0xffffffff,
      0x000f0000, 0x00000000, 0x000ffffe, 0xffffffff, 0x000fffff, 0x00000000,
      0x000fffff, 0xfeffffff, 0x000fffff, 0xff000000, 0x000fffff, 0xfffeffff,
      0x000fffff, 0xffff0000, 0x000fffff, 0xffff7fff, 0x000fffff, 0xffff8000,
      0x000fffff, 0xfffffffe, 0x000fffff, 0xffffffff, 0x00100000, 0x00000000,
      0x00100000, 0x00000001, 0x00100000, 0x00000002, 0x00100000, 0x00007fff,
      0x00100000, 0x00008000, 0x00100000, 0x0000ffff, 0x00100000, 0x00010000,
      0x00100000, 0x00ffffff, 0x00100000, 0x01000000, 0x00100000, 0x5634e2db,
      0x00100000, 0xb776d5f5, 0x00100000, 0xffffffff, 0x00100001, 0x00000000,
      0x0010ffff, 0xffffffff, 0x00110000, 0x00000000, 0x001fffff, 0xffffffff,
      0xd634e2db, 0xb776d5f5, 0x0dabb8d1, 0x0dabb8d0, 0x5624e2db, 0xb776d5f4,
      0x5624e2db, 0xb776d5f5, 0x5633e2db, 0xb776d5f4, 0x5633e2db, 0xb776d5f5,
      0x5634e2da, 0xb776d5f4, 0x5634e2da, 0xb776d5f5, 0x5634e2db, 0xb676d5f4,
      0x5634e2db, 0xb676d5f5, 0x5634e2db, 0xb775d5f4, 0x5634e2db, 0xb775d5f5,
      0x5634e2db, 0xb77655f4, 0x5634e2db, 0xb77655f5, 0x5634e2db, 0xb776d5f3,
      0x5634e2db, 0xb776d5f4, 0x5634e2db, 0xb776d5f5, 0x5634e2db, 0xb776d5f6,
      0x5634e2db, 0xb776d5f7, 0x5634e2db, 0xb77755f4, 0x5634e2db, 0xb77755f5,
      0x5634e2db, 0xb777d5f4, 0x5634e2db, 0xb777d5f5, 0x5634e2db, 0xb876d5f4,
      0x5634e2db, 0xb876d5f5, 0x5634e2dc, 0x0dabb8d0, 0x5634e2dc, 0x6eedabea,
      0x5634e2dc, 0xb776d5f4, 0x5634e2dc, 0xb776d5f5, 0x5635e2db, 0xb776d5f4,
      0x5635e2db, 0xb776d5f5, 0x5644e2db, 0xb776d5f4, 0x5644e2db, 0xb776d5f5,
      0xffffffff, 0xffffffff, 0x3776d5f5, 0x5634e2da, 0x7fefffff, 0xfffffffe,
      0x7fefffff, 0xffffffff, 0x7ffeffff, 0xfffffffe, 0x7ffeffff, 0xffffffff,
      0x7ffffffe, 0xfffffffe, 0x7ffffffe, 0xffffffff, 0x7fffffff, 0xfefffffe,
      0x7fffffff, 0xfeffffff, 0x7fffffff, 0xfffefffe, 0x7fffffff, 0xfffeffff,
      0x7fffffff, 0xffff7ffe, 0x7fffffff, 0xffff7fff, 0x7fffffff, 0xfffffffd,
      0x7fffffff, 0xfffffffe, 0x7fffffff, 0xffffffff, 0x80000000, 0x00000000,
      0x80000000, 0x00000001, 0x80000000, 0x00007ffe, 0x80000000, 0x00007fff,
      0x80000000, 0x0000fffe, 0x80000000, 0x0000ffff, 0x80000000, 0x00fffffe,
      0x80000000, 0x00ffffff, 0x80000000, 0x5634e2da, 0x80000000, 0xb776d5f4,
      0x80000000, 0xfffffffe, 0x80000000, 0xffffffff, 0x8000ffff, 0xfffffffe,
      0x8000ffff, 0xffffffff, 0x800fffff, 0xfffffffe, 0x800fffff, 0xffffffff,
      0xd634e2db, 0xb776d5f4
    ];

export default TEST_ADD_BITS;
