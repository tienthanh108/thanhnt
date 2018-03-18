
const BRANCHES = [
  {
    id: 113,
    name: 'PGD Nguyễn Thái Sơn',
    addressDetail: '124B Nguyễn Thái Sơn',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 648,
      name: 'Gò Vấp',
    },
  },
  {
    id: 114,
    name: 'PGD Phan Huy Ích',
    addressDetail: '242 Phan Huy Ích',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 648,
      name: 'Gò Vấp',
    },
  },
  {
    id: 116,
    name: 'PGD Chánh Hưng',
    addressDetail: '357-359 Phạm Hùng  ấp 4',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 643,
      name: 'Bình Chánh',
    },
  },
  {
    id: 117,
    name: 'PGD Phú Xuân',
    addressDetail: '101-101A Huỳnh Tấn Phát',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 650,
      name: 'Nhà Bè',
    },
  },
  {
    id: 118,
    name: 'CN CỘNG HÒA',
    addressDetail: 'Số 19C Cộng Hoà',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 119,
    name: 'PGD Hoàng Hoa Thám ',
    addressDetail: ' 26 Hoàng Hoa Thám',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 120,
    name: 'PGD Lý Thường Kiệt',
    addressDetail: 'Số 539-541-543-545 đường Lý Thường Kiệt',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 121,
    name: 'PGD Phạm Văn Hai',
    addressDetail: '83 Phạm Văn Hai',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 122,
    name: 'PGD Tân Bình ',
    addressDetail: '10 Đường Phan Đình Giót',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 123,
    name: 'PGD Tân Phú ',
    addressDetail: 'Số 187 Nguyễn Sơn',
    province: {
      id: 19,
      name: 'Đồng Nai',
    },
    district: {
      id: 665,
      name: 'Tân Phú',
    },
  },
  {
    id: 124,
    name: 'CN ĐỒNG NAI',
    addressDetail: 'Số K19, Võ Thị Sáu, KP 7',
    province: {
      id: 19,
      name: 'Đồng Nai',
    },
    district: {
      id: 175,
      name: 'Biên Hòa',
    },
  },
  {
    id: 125,
    name: 'CN BÌNH DƯƠNG',
    addressDetail: '557 Đại lộ Bình Dương',
    province: {
      id: 9,
      name: 'Bình Dương',
    },
    district: {
      id: 80,
      name: 'Thủ Dầu Một',
    },
  },
  {
    id: 126,
    name: 'PGD Thủ Đức ',
    addressDetail: 'Một phần ngôi nhà Số 104 đường Võ Văn Ngân, Tổ 3, khu phố 1',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 666,
      name: 'Thủ Đức',
    },
  },
  {
    id: 127,
    name: 'CN QUẬN 2',
    addressDetail: '278 Trần Não',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 656,
      name: 'Quận 2',
    },
  },
  {
    id: 128,
    name: 'PGD Thạnh Mỹ Lợi',
    addressDetail: '638-640 Nguyễn Thị Định',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 656,
      name: 'Quận 2',
    },
  },
  {
    id: 129,
    name: 'CN QUẬN 7',
    addressDetail: 'Số 23-25-27 Nguyễn Hữu Thọ',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 661,
      name: 'Quận 7',
    },
  },
  {
    id: 130,
    name: 'PGD Huỳnh Tấn Phát ',
    addressDetail: 'Tầng trệt và lầu 1, 332 – 332A Huỳnh tấn Phát, khu phố 1',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 661,
      name: 'Quận 7',
    },
  },
  {
    id: 131,
    name: 'PGD Phú Mỹ Hưng',
    addressDetail: 'Số 85 đường Hoàng Văn Thái TT Thương mại tài chánh quốc tế Phú Mỹ Hưng',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 661,
      name: 'Quận 7',
    },
  },
  {
    id: 132,
    name: 'PGD Văn Thánh',
    addressDetail: 'Một phần tầng trệt số 18A đường D2',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 645,
      name: 'Bình Thạnh',
    },
  },
  {
    id: 133,
    name: 'CN GÒ VẤP',
    addressDetail: 'Số 2B đường Quang Trung',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 648,
      name: 'Gò Vấp',
    },
  },
  {
    id: 134,
    name: 'CN GIA ĐỊNH',
    addressDetail: 'Số 296 đường Phan Xích Long',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 651,
      name: 'Phú Nhuận',
    },
  },
  {
    id: 135,
    name: 'PGD Bàu Cát',
    addressDetail: 'Block C của Dự án the Harmona tọa lạc tại số 33 Trương Công Định',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 664,
      name: 'Tân Bình',
    },
  },
  {
    id: 136,
    name: 'PGD Hố Nai',
    addressDetail: 'Số 44/3, Đường Quốc lộ 1A, KP 8B',
    province: {
      id: 19,
      name: 'Đồng Nai',
    },
    district: {
      id: 175,
      name: 'Biên Hòa',
    },
  },
  {
    id: 137,
    name: 'PGD Lái Thiêu',
    addressDetail: '68 A đường Nguyễn Văn Tiết, tổ 7 Khu phố Đông Tư',
    province: {
      id: 9,
      name: 'Bình Dương',
    },
    district: {
      id: 81,
      name: 'Thuận An',
    },
  },
  {
    id: 138,
    name: 'CN BẾN THÀNH',
    addressDetail: 'Số 2 Tôn Đức Thắng',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 652,
      name: 'Quận 1',
    },
  },
  {
    id: 139,
    name: 'CN HỒ CHÍ MINH',
    addressDetail: '165 - 167 - 169 Hàm Nghi',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 652,
      name: 'Quận 1',
    },
  },
  {
    id: 140,
    name: 'PGD Tân Định',
    addressDetail: '300 Hai bà trưng',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 652,
      name: 'Quận 1',
    },
  },
  {
    id: 141,
    name: 'PGD Khánh Hội',
    addressDetail: '199 Đường Khánh Hội',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 658,
      name: 'Quận 4',
    },
  },
  {
    id: 142,
    name: 'PGD Lê Văn Việt',
    addressDetail: '224A Lê Văn Việt',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 663,
      name: 'Quận 9',
    },
  },
  {
    id: 143,
    name: 'PGD Lê Văn Sỹ',
    addressDetail: '288-290 Đường Lê Văn Sỹ',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 657,
      name: 'Quận 3',
    },
  },
  {
    id: 144,
    name: 'PGD Quận 3',
    addressDetail: 'Số 26A Phạm Ngọc Thạch',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 657,
      name: 'Quận 3',
    },
  },
  {
    id: 145,
    name: 'CN SÀI GÒN',
    addressDetail: '129 Nguyễn Chí Thanh',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 659,
      name: 'Quận 5',
    },
  },
  {
    id: 146,
    name: 'PGD An Dương Vương',
    addressDetail: 'Số 313 An Dương Vương',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 659,
      name: 'Quận 5',
    },
  },
  {
    id: 147,
    name: 'PGD Bùi Hữu Nghĩa ',
    addressDetail: '474A Trần Hưng Đạo',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 659,
      name: 'Quận 5',
    },
  },
  {
    id: 148,
    name: 'PGD Bình Phú',
    addressDetail: 'Số 56 Bình Phú',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 660,
      name: 'Quận 6',
    },
  },
  {
    id: 149,
    name: 'PGD CHỢ LỚN',
    addressDetail: ' 54 Trần Bình - 57 Tháp Mười ',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 660,
      name: 'Quận 6',
    },
  },
  {
    id: 150,
    name: 'PGD Hậu Giang',
    addressDetail: '211-213 Hậu Giang',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 660,
      name: 'Quận 6',
    },
  },
  {
    id: 151,
    name: 'PGD Phú Lâm',
    addressDetail: 'Số 120-122, Đường Kinh Dương Vương',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 660,
      name: 'Quận 6',
    },
  },
  {
    id: 152,
    name: 'PGD Quận 8',
    addressDetail: '279-281, Đường Liên tỉnh 5',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 662,
      name: 'Quận 8',
    },
  },
  {
    id: 153,
    name: 'PGD Hòa Hưng ',
    addressDetail: '611 Đường Cách Mạng Tháng Tám',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 653,
      name: 'Quận 10',
    },
  },
  {
    id: 154,
    name: 'PGD Quận 10',
    addressDetail: '296 đường 3/2',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 653,
      name: 'Quận 10',
    },
  },
  {
    id: 155,
    name: 'PGD Nguyễn Thiện Thuật ',
    addressDetail: '299-301 Nguyễn Thiện Thuật',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 657,
      name: 'Quận 3',
    },
  },
  {
    id: 156,
    name: 'PGD An Sương',
    addressDetail: '24/44C Trường Chinh',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 655,
      name: 'Quận 12',
    },
  },
  {
    id: 157,
    name: 'CN KIÊN GIANG',
    addressDetail: 'Số 4 Đường Trần Phú',
    province: {
      id: 32,
      name: 'Kiên Giang',
    },
    district: {
      id: 347,
      name: 'Rạch Giá',
    },
  },
  {
    id: 158,
    name: 'CN NHA TRANG',
    addressDetail: '26 Đường Yersin',
    province: {
      id: 31,
      name: 'Khánh Hòa',
    },
    district: {
      id: 332,
      name: 'Nha Trang',
    },
  },
  {
    id: 159,
    name: 'PGD Phước Tiến',
    addressDetail: '160 Ngô Gia Tự',
    province: {
      id: 31,
      name: 'Khánh Hòa',
    },
    district: {
      id: 332,
      name: 'Nha Trang',
    },
  },
  {
    id: 160,
    name: 'PGD Bến Lức',
    addressDetail: '83 Nguyễn Hữu Thọ, Khu phố 3',
    province: {
      id: 38,
      name: 'Long An',
    },
    district: {
      id: 401,
      name: 'Bến Lức',
    },
  },
  {
    id: 161,
    name: 'CN LONG AN',
    addressDetail: 'Tòa nhà số 6 Lê Cao Dõng',
    province: {
      id: 38,
      name: 'Long An',
    },
    district: {
      id: 409,
      name: 'Tân An',
    },
  },
  {
    id: 162,
    name: 'PGD Ý Yên',
    addressDetail: 'Đường 57A',
    province: {
      id: 39,
      name: 'Nam Định',
    },
    district: {
      id: 425,
      name: 'Ý Yên',
    },
  },
  {
    id: 163,
    name: 'CN NAM ĐỊNH',
    addressDetail: '69 Phố Lê Hồng Phong',
    province: {
      id: 39,
      name: 'Nam Định',
    },
    district: {
      id: 419,
      name: 'Nam Định',
    },
  },
  {
    id: 164,
    name: 'PGD Hoàng Văn Thụ',
    addressDetail: '49 Phố Quang Trung',
    province: {
      id: 39,
      name: 'Nam Định',
    },
    district: {
      id: 419,
      name: 'Nam Định',
    },
  },
  {
    id: 165,
    name: 'PGD Lạc Quần',
    addressDetail: 'Số 98 tiểu khu Thống Nhất',
    province: {
      id: 39,
      name: 'Nam Định',
    },
    district: {
      id: 422,
      name: 'Trực Ninh',
    },
  },
  {
    id: 166,
    name: 'CN NGHỆ AN',
    addressDetail: 'Nhà A khu TMDV nhà ở C1  đường Quang Trung',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 167,
    name: 'PGD Bến Thủy',
    addressDetail: 'Số 01 Nguyễn Văn Trỗi',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 168,
    name: 'PGD Cửa Đông',
    addressDetail: '99 Đường Nguyễn Phong Sắc',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 169,
    name: 'PGD Chợ Vinh',
    addressDetail: 'Số 20, đường Cao Thắng',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 170,
    name: 'PGD Đội Cung',
    addressDetail: '113 Đường Trường Chinh',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 171,
    name: 'PGD Nguyễn Văn Cừ ',
    addressDetail: '157 Đường Nguyễn Văn Cừ',
    province: {
      id: 40,
      name: 'Nghệ An',
    },
    district: {
      id: 445,
      name: 'Vinh',
    },
  },
  {
    id: 172,
    name: 'CN PHÚ THỌ',
    addressDetail: '2269 Đại Lộ Hùng Vương',
    province: {
      id: 43,
      name: 'Phú Thọ',
    },
    district: {
      id: 473,
      name: 'Việt Trì',
    },
  },
  {
    id: 173,
    name: 'PGD Tiên Cát',
    addressDetail: '1421 Đại lộ Hùng Vương',
    province: {
      id: 43,
      name: 'Phú Thọ',
    },
    district: {
      id: 473,
      name: 'Việt Trì',
    },
  },
  {
    id: 174,
    name: 'PGD Bố Trạch',
    addressDetail: 'TK2',
    province: {
      id: 45,
      name: 'Quảng Bình',
    },
    district: {
      id: 485,
      name: 'Bố Trạch',
    },
  },
  {
    id: 175,
    name: 'CN QUẢNG BÌNH',
    addressDetail: '108 Đường Trần Hưng Đạo',
    province: {
      id: 45,
      name: 'Quảng Bình',
    },
    district: {
      id: 486,
      name: 'Đồng Hới',
    },
  },
  {
    id: 176,
    name: 'PGD Đồng Hới',
    addressDetail: 'Số 59 Tố Hữu',
    province: {
      id: 45,
      name: 'Quảng Bình',
    },
    district: {
      id: 486,
      name: 'Đồng Hới',
    },
  },
  {
    id: 177,
    name: 'PGD Ba Đồn',
    addressDetail: 'Số 187 Quang Trung',
    province: {
      id: 45,
      name: 'Quảng Bình',
    },
    district: {
      id: 484,
      name: 'Ba Đồn',
    },
  },
  {
    id: 178,
    name: 'PGD Cẩm Phả ',
    addressDetail: '308 Đường Trần Phú',
    province: {
      id: 48,
      name: 'Quảng Ninh',
    },
    district: {
      id: 526,
      name: 'Cẩm Phả',
    },
  },
  {
    id: 179,
    name: 'CN QUẢNG NINH',
    addressDetail: 'Tòa nhà Hạ Long TK, số 12 Đường 25/4',
    province: {
      id: 48,
      name: 'Quảng Ninh',
    },
    district: {
      id: 530,
      name: 'Hạ Long',
    },
  },
  {
    id: 180,
    name: 'PGD Móng Cái',
    addressDetail: '6 Đường Hùng Vương',
    province: {
      id: 48,
      name: 'Quảng Ninh',
    },
    district: {
      id: 533,
      name: 'Móng Cái',
    },
  },
  {
    id: 181,
    name: 'PGD Uông Bí',
    addressDetail: '496 Quang Trung',
    province: {
      id: 48,
      name: 'Quảng Ninh',
    },
    district: {
      id: 536,
      name: 'Uông Bí',
    },
  },
  {
    id: 182,
    name: 'CN QUẢNG TRỊ',
    addressDetail: '16 Đường Hùng Vương',
    province: {
      id: 49,
      name: 'Quảng Trị',
    },
    district: {
      id: 541,
      name: 'Đông Hà',
    },
  },
  {
    id: 183,
    name: 'PGD Kỳ Bá',
    addressDetail: 'Số 225 tổ 22 đường Lý Thái Tổ',
    province: {
      id: 53,
      name: 'Thái Bình',
    },
    district: {
      id: 584,
      name: 'Thái Bình',
    },
  },
  {
    id: 184,
    name: 'PGD Trần Lãm',
    addressDetail: '792 Lý Bôn',
    province: {
      id: 53,
      name: 'Thái Bình',
    },
    district: {
      id: 584,
      name: 'Thái Bình',
    },
  },
  {
    id: 185,
    name: 'CN THÁI BÌNH',
    addressDetail: '259 M Lê Quý Đôn',
    province: {
      id: 53,
      name: 'Thái Bình',
    },
    district: {
      id: 584,
      name: 'Thái Bình',
    },
  },
  {
    id: 186,
    name: 'PGD Gang Thép',
    addressDetail: '542/1+544/1 đường CM Tháng 8',
    province: {
      id: 54,
      name: 'Thái Nguyên',
    },
    district: {
      id: 595,
      name: 'Thái Nguyên',
    },
  },
  {
    id: 187,
    name: 'PGD Nguyễn Trãi',
    addressDetail: '306 Nguyễn Trãi',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 616,
      name: 'Thanh Hóa',
    },
  },
  {
    id: 188,
    name: 'PGD Nam Thành',
    addressDetail: 'Số 43A Quang Trung I',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 616,
      name: 'Thanh Hóa',
    },
  },
  {
    id: 189,
    name: 'CN THANH HOÁ',
    addressDetail: '27-29 Đại Lộ Lê Lợi',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 616,
      name: 'Thanh Hóa',
    },
  },
  {
    id: 190,
    name: 'PGD Đông Thọ',
    addressDetail: '646 Đường Bà Triệu',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 616,
      name: 'Thanh Hóa',
    },
  },
  {
    id: 191,
    name: 'PGD Trường Thi',
    addressDetail: 'Số 63 Trường Thi',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 616,
      name: 'Thanh Hóa',
    },
  },
  {
    id: 192,
    name: 'PGD Bỉm Sơn',
    addressDetail: '18 Đường Nguyễn Huệ',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 598,
      name: 'Bỉm Sơn',
    },
  },
  {
    id: 193,
    name: 'PGD Sầm Sơn',
    addressDetail: '47 Đường Nguyễn Du',
    province: {
      id: 55,
      name: 'Thanh Hóa',
    },
    district: {
      id: 614,
      name: 'Sầm Sơn',
    },
  },
  {
    id: 194,
    name: 'PGD Vỹ Dạ ',
    addressDetail: '214 Nguyễn Sinh Cung',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 195,
    name: 'PGD Bến Ngự',
    addressDetail: 'Số 66 (số cũ: 30) đường Trần Thúc Nhẫn',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 196,
    name: 'PGD Đông Ba',
    addressDetail: '165 Đường Trần Hưng Đạo',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 197,
    name: 'PGD Mai Thúc Loan',
    addressDetail: '91 Đường Mai Thúc Loan',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 198,
    name: 'PGD Phú Hội',
    addressDetail: 'Số 64 Hùng Vương',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 199,
    name: 'CN HUẾ',
    addressDetail: '35 Lý Thường Kiệt',
    province: {
      id: 56,
      name: 'Thừa Thiên - Huế',
    },
    district: {
      id: 624,
      name: 'Huế',
    },
  },
  {
    id: 200,
    name: 'CN VĨNH LONG',
    addressDetail: '53 A Phạm Thái Bường',
    province: {
      id: 61,
      name: 'Vĩnh Long',
    },
    district: {
      id: 688,
      name: 'Vĩnh Long',
    },
  },
  {
    id: 201,
    name: 'CN VĨNH PHÚC',
    addressDetail: '1 Mê Linh',
    province: {
      id: 62,
      name: 'Vĩnh Phúc',
    },
    district: {
      id: 697,
      name: 'Vĩnh Yên',
    },
  },
  {
    id: 202,
    name: 'PGD Vĩnh Yên',
    addressDetail: '192-194 đường Hùng Vương',
    province: {
      id: 62,
      name: 'Vĩnh Phúc',
    },
    district: {
      id: 697,
      name: 'Vĩnh Yên',
    },
  },
  {
    id: 203,
    name: 'PGD Phúc Yên',
    addressDetail: 'Số 104 Hai Bà Trưng',
    province: {
      id: 62,
      name: 'Vĩnh Phúc',
    },
    district: {
      id: 692,
      name: 'Phúc Yên',
    },
  },
  {
    id: 204,
    name: 'PGD Lý Tự Trọng',
    addressDetail: 'Số 126 đường Lý Tự Trọng',
    province: {
      id: 13,
      name: 'Cần Thơ',
    },
    district: {
      id: 115,
      name: 'Ninh Kiều',
    },
  },
  {
    id: 205,
    name: 'PGD Ninh Kiều',
    addressDetail: 'Số 85 đường Nguyễn Văn Cừ',
    province: {
      id: 13,
      name: 'Cần Thơ',
    },
    district: {
      id: 115,
      name: 'Ninh Kiều',
    },
  },
  {
    id: 206,
    name: 'CN ĐÀ LẠT',
    addressDetail: 'Số 89 Phan Bội Châu',
    province: {
      id: 35,
      name: 'Lâm Đồng',
    },
    district: {
      id: 373,
      name: 'Đà Lạt',
    },
  },
  {
    id: 207,
    name: 'CN GIA LAI',
    addressDetail: 'Số 30 Trần Phú',
    province: {
      id: 21,
      name: 'Gia Lai',
    },
    district: {
      id: 212,
      name: 'Pleiku',
    },
  },
  {
    id: 208,
    name: 'PGD Đò Quan',
    addressDetail: 'Số 10 đường Trần Phú',
    province: {
      id: 39,
      name: 'Nam Định',
    },
    district: {
      id: 419,
      name: 'Nam Định',
    },
  },
  {
    id: 209,
    name: 'CN QUẢNG NAM',
    addressDetail: 'Số 30-32 đường Phan Châu Chinh',
    province: {
      id: 46,
      name: 'Quảng Nam',
    },
    district: {
      id: 506,
      name: 'Tam Kỳ',
    },
  },
  {
    id: 210,
    name: 'PGD Đông Hà',
    addressDetail: '17 Trần Hưng Đạo',
    province: {
      id: 49,
      name: 'Quảng Trị',
    },
    district: {
      id: 541,
      name: 'Đông Hà',
    },
  },
  {
    id: 211,
    name: 'CN TIỀN GIANG',
    addressDetail: 'Số 69A7-69-A8 Nguyễn Trãi',
    province: {
      id: 57,
      name: 'Tiền Giang',
    },
    district: {
      id: 640,
      name: 'Mỹ Tho',
    },
  },
  {
    id: 212,
    name: 'PGD Trần Phú',
    addressDetail: 'Số 83 + 83A, phố Trần Phú, tổ 16',
    province: {
      id: 53,
      name: 'Thái Bình',
    },
    district: {
      id: 584,
      name: 'Thái Bình',
    },
  },
  {
    id: 213,
    name: 'CN THÁI NGUYÊN',
    addressDetail: 'Tầng lửng + tầng 2 + tầng 3 của ngôi nhà số 631 Lương Ngọc Quyến',
    province: {
      id: 54,
      name: 'Thái Nguyên',
    },
    district: {
      id: 595,
      name: 'Thái Nguyên',
    },
  },
  {
    id: 1,
    name: 'CN  BẮC NINH',
    addressDetail: 'Một phần tầng 1 và một phần tầng 2 tòa nhà Việt Long, số 34 đường Lý Thái Tổ',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 45,
      name: 'Bắc Ninh',
    },
  },
  {
    id: 2,
    name: 'CN  BẮC NINH',
    addressDetail: 'Một phần tầng 1 và một phần tầng 2 tòa nhà Việt Long, số 34 đường Lý Thái Tổ',
    province: {
      id: 6,
      name: 'Bắc Ninh',
    },
    district: {
      id: 45,
      name: 'Bắc Ninh',
    },
  },
  {
    id: 3,
    name: 'PGD Châu Đốc',
    addressDetail: '62- 64 Nguyễn Văn Thoại',
    province: {
      id: 1,
      name: 'An Giang',
    },
    district: {
      id: 2,
      name: 'Châu Đốc',
    },
  },
  {
    id: 4,
    name: 'CN VŨNG TÀU',
    addressDetail: '13 Đường Nguyễn Thái Học',
    province: {
      id: 2,
      name: 'Bà Rịa - Vũng Tàu',
    },
    district: {
      id: 15,
      name: 'Vũng Tàu',
    },
  },
  {
    id: 5,
    name: 'CN BẮC GIANG',
    addressDetail: '303 Lê Lợi',
    province: {
      id: 3,
      name: 'Bắc Giang',
    },
    district: {
      id: 20,
      name: 'Bắc Giang',
    },
  },
  {
    id: 6,
    name: 'PGD Hiệp Hòa',
    addressDetail: 'Số 80 đường 19/5 ',
    province: {
      id: 3,
      name: 'Bắc Giang',
    },
    district: {
      id: 20,
      name: 'Bắc Giang',
    },
  },
  {
    id: 7,
    name: 'PGD Lê Lợi',
    addressDetail: '208 Lê Lợi',
    province: {
      id: 3,
      name: 'Bắc Giang',
    },
    district: {
      id: 20,
      name: 'Bắc Giang',
    },
  },
  {
    id: 8,
    name: 'PGD Ngô Gia Tự',
    addressDetail: '43 Nguyễn Văn Cừ',
    province: {
      id: 3,
      name: 'Bắc Giang',
    },
    district: {
      id: 20,
      name: 'Bắc Giang',
    },
  },
  {
    id: 9,
    name: 'PGD Từ Sơn',
    addressDetail: 'Số nhà 317 Trần Phú',
    province: {
      id: 6,
      name: 'Bắc Ninh',
    },
    district: {
      id: 51,
      name: 'Từ Sơn',
    },
  },
  {
    id: 10,
    name: 'CN BÌNH ĐỊNH',
    addressDetail: 'Số 83 Mai Xuân Thưởng',
    province: {
      id: 8,
      name: 'Bình Định',
    },
    district: {
      id: 68,
      name: 'Quy Nhơn',
    },
  },
  {
    id: 11,
    name: 'PGD Nguyễn Thái Học',
    addressDetail: '390A-390B Nguyễn Thái Học',
    province: {
      id: 8,
      name: 'Bình Định',
    },
    district: {
      id: 68,
      name: 'Quy Nhơn',
    },
  },
  {
    id: 12,
    name: 'CN BÌNH THUẬN',
    addressDetail: '132 Trần Hưng Đạo',
    province: {
      id: 11,
      name: 'Bình Thuận',
    },
    district: {
      id: 99,
      name: 'Phan Thiết',
    },
  },
  {
    id: 13,
    name: 'PGD Lagi',
    addressDetail: '153A11-153A12  đường Lê Lợi',
    province: {
      id: 11,
      name: 'Bình Thuận',
    },
    district: {
      id: 98,
      name: 'La Gi',
    },
  },
  {
    id: 14,
    name: 'CN CẦN THƠ',
    addressDetail: '52-54 Trần Văn Khéo',
    province: {
      id: 13,
      name: 'Cần Thơ',
    },
    district: {
      id: 115,
      name: 'Ninh Kiều',
    },
  },
  {
    id: 15,
    name: 'PGD Hưng Lợi',
    addressDetail: '231T Đường Ba Tháng Hai',
    province: {
      id: 13,
      name: 'Cần Thơ',
    },
    district: {
      id: 115,
      name: 'Ninh Kiều',
    },
  },
  {
    id: 16,
    name: 'CN ĐÀ NẴNG',
    addressDetail: '112 Đường Phan Chu Trinh',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 17,
    name: 'PGD Đống Đa',
    addressDetail: '318 Đường Đống Đa',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 18,
    name: 'PGD Hải Châu',
    addressDetail: '62 Đường Nguyễn Thị Minh Khai',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 19,
    name: 'PGD Hoàng Diệu',
    addressDetail: '427 Đường Hoàng Diệu',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 20,
    name: 'PGD Núi Thành',
    addressDetail: '407 Núi Thành',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 21,
    name: 'PGD Nguyễn Tri Phương',
    addressDetail: '5 Đường Nguyễn Hữu Thọ',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 135,
      name: 'Hải Châu',
    },
  },
  {
    id: 22,
    name: 'PGD Sơn Trà',
    addressDetail: '1088 Đường Ngô Quyền',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 140,
      name: 'Sơn Trà',
    },
  },
  {
    id: 23,
    name: 'PGD Điện Biên Phủ ',
    addressDetail: '567 Đường Điện Biên Phủ',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 141,
      name: 'Thanh Khê',
    },
  },
  {
    id: 24,
    name: 'PGD Hàm Nghi',
    addressDetail: '102-104 Hàm Nghi',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 141,
      name: 'Thanh Khê',
    },
  },
  {
    id: 25,
    name: 'PGD Lê Duẩn',
    addressDetail: '234 Ông Ích Khiêm',
    province: {
      id: 15,
      name: 'Đà Nẵng',
    },
    district: {
      id: 141,
      name: 'Thanh Khê',
    },
  },
  {
    id: 26,
    name: 'CN ĐỒNG THÁP',
    addressDetail: '67-69 Đường Nguyễn Huệ',
    province: {
      id: 20,
      name: 'Đồng Tháp',
    },
    district: {
      id: 186,
      name: 'Cao Lãnh',
    },
  },
  {
    id: 27,
    name: 'PGD Lê Hồng Phong',
    addressDetail: '41 Lê Hồng Phong',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 230,
      name: 'Ba Đình',
    },
  },
  {
    id: 28,
    name: 'PGD Liễu Giai',
    addressDetail: '40 Phố Liễu Giai',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 230,
      name: 'Ba Đình',
    },
  },
  {
    id: 29,
    name: 'PGD Thành Công',
    addressDetail: 'Số 22 phố Thành Công',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 230,
      name: 'Ba Đình',
    },
  },
  {
    id: 30,
    name: 'PGD Cầu Giấy ',
    addressDetail: '2 Nguyễn Khánh Toàn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 31,
    name: 'PGD Phạm Văn Đồng ',
    addressDetail: 'Tòa nhà 2T Corp Km9 Phạm Văn Đồng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 32,
    name: 'PGD Quan Hoa',
    addressDetail: 'Số 299 Cầu Giấy',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 33,
    name: 'PGD Trần Duy Hưng',
    addressDetail: '16 Nguyễn Thị Định',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 34,
    name: 'PGD Trần Thái Tông',
    addressDetail: 'Chung cư lô C ô D5 khu đô thị mới Cầu Giấy',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 35,
    name: 'PGD Yên Hòa',
    addressDetail: 'Tầng 1 của khu nhà chung cư E3, Khu đô thị Yên Hòa',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 36,
    name: 'CN THĂNG LONG',
    addressDetail: 'Tòa nhà M3 - M4 Nguyễn Chí Thanh',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 37,
    name: 'PGD Cát Linh',
    addressDetail: '24 Cát Linh',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 38,
    name: 'PGD Giảng Võ',
    addressDetail: '209 Giảng Võ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 39,
    name: 'PGD Hào Nam',
    addressDetail: '102 Hào Nam',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 40,
    name: 'PGD Kim Liên ',
    addressDetail: '61 Phố Xã Đàn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 41,
    name: 'PGD Khâm Thiên ',
    addressDetail: '180- 182 Phố Khâm Thiên',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 42,
    name: 'PGD Láng Hạ',
    addressDetail: '52-54 Láng Hạ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 43,
    name: 'PGD Phương Mai ',
    addressDetail: '75 Phương Mai',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 44,
    name: 'PGD Tôn Đức Thắng ',
    addressDetail: '143A và 143 Tôn Đức Thắng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 45,
    name: 'PGD Tràng An',
    addressDetail: '33 Phố Võ Văn Dũng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 46,
    name: 'PGD Văn Quán',
    addressDetail: 'Tòa nhà Rainbow Văn Quán đường 19/05',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 239,
      name: 'Hà Đông',
    },
  },
  {
    id: 47,
    name: 'CN ĐÔNG ĐÔ  ',
    addressDetail: '362 Phố Huế',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 48,
    name: 'PGD Bà Triệu',
    addressDetail: 'Số 99 Phố Bà Triệu',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 49,
    name: 'PGD Bách Khoa',
    addressDetail: '92 Phố Lê Thanh Nghị',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 50,
    name: 'PGD Đồng Tâm ',
    addressDetail: 'Số 94 Phố Trần Đại Nghĩa',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 51,
    name: 'PGD Hai Bà Trưng',
    addressDetail: '182 Phố Lò Đúc',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 52,
    name: 'PGD Lạc Trung',
    addressDetail: 'Số 55 Lạc Trung',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 53,
    name: 'CN HÀ NỘI',
    addressDetail: '4 Dã Tượng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 54,
    name: 'CN NGÔ QUYỀN',
    addressDetail: 'Tòa nhà Vinaplat 39 Ngô Quyền',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 55,
    name: 'CN SỞ GIAO DỊCH',
    addressDetail: 'Tầng 1 và tầng 3, Tòa nhà số 34 phố Hai Bà Trưng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 56,
    name: 'PGD Đồng Xuân',
    addressDetail: 'Tầng 1 và tầng 2 số 21 Hàng Đậu',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 57,
    name: 'PGD Nguyễn Hữu Huân',
    addressDetail: 'Số 98 Nguyễn Hữu Huân',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 58,
    name: 'PGD Thái Hà',
    addressDetail: 'Tầng 1, tầng 2 tòa nhà số 78A, tổ 4A',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 59,
    name: 'PGD Định Công',
    addressDetail: 'B5 Nơ 11 Khu Đô thị mới Định Công',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 243,
      name: 'Hoàng Mai',
    },
  },
  {
    id: 60,
    name: 'PGD Linh Đàm',
    addressDetail: 'BT1 - Ô 18 Bắc Linh Đàm',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 243,
      name: 'Hoàng Mai',
    },
  },
  {
    id: 61,
    name: 'PGD Nam Hà Nội ',
    addressDetail: 'Số nhà 17 và số nhà 19 Phố Kim Đồng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 243,
      name: 'Hoàng Mai',
    },
  },
  {
    id: 62,
    name: 'PGD Đông Anh',
    addressDetail: 'Số 16 dãy 1 khối 1B',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 236,
      name: 'Đông Anh',
    },
  },
  {
    id: 63,
    name: 'PGD Chương Dương',
    addressDetail: '498 Đường Nguyễn Văn Cừ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 244,
      name: 'Long Biên',
    },
  },
  {
    id: 64,
    name: 'PGD Ngọc Lâm',
    addressDetail: '172 Ngọc Lâm',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 244,
      name: 'Long Biên',
    },
  },
  {
    id: 65,
    name: 'PGD Việt Hưng',
    addressDetail: 'Số 251 Ngô Gia Tự',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 244,
      name: 'Long Biên',
    },
  },
  {
    id: 66,
    name: 'PGD Mỹ Đình',
    addressDetail: 'Tầng 1  toà nhà CT1-1 khu đô thị Mễ Trì Hạ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 247,
      name: 'Nam Từ Liêm',
    },
  },
  {
    id: 67,
    name: 'PGD Từ Liêm',
    addressDetail: 'Căn hộ N1H1- Nhà số 1 khu nhà ở để bán',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 247,
      name: 'Nam Từ Liêm',
    },
  },
  {
    id: 68,
    name: 'PGD Đội Cấn',
    addressDetail: '279 Đội Cấn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 230,
      name: 'Ba Đình',
    },
  },
  {
    id: 69,
    name: 'CN KINH ĐÔ  ',
    addressDetail: '292 Tây Sơn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 237,
      name: 'Đống Đa',
    },
  },
  {
    id: 70,
    name: 'PGD Âu Cơ',
    addressDetail: '19 Âu Cơ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 253,
      name: 'Tây Hồ',
    },
  },
  {
    id: 71,
    name: 'PGD Nam Thăng Long',
    addressDetail: 'Lô số 4 khu thương mại thấp tầng (Shophouse CT-17) khu đô thị Nam Thăng Long',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 253,
      name: 'Tây Hồ',
    },
  },
  {
    id: 72,
    name: 'PGD Thụy Khuê',
    addressDetail: '152 Thuỵ Khuê',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 253,
      name: 'Tây Hồ',
    },
  },
  {
    id: 73,
    name: 'PGD Xuân La',
    addressDetail: '16 Xuân La',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 253,
      name: 'Tây Hồ',
    },
  },
  {
    id: 74,
    name: 'PGD Hà Thành',
    addressDetail: 'Ô số L1-01  Tầng 1 tòa nhà R6 khu trung tâm thương mại Vincom Mega Mall số 72A Nguyễn Trãi',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 257,
      name: 'Thanh Xuân',
    },
  },
  {
    id: 75,
    name: 'PGD Lê Trọng Tấn',
    addressDetail: '56 Phố Lê Trọng Tấn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 257,
      name: 'Thanh Xuân',
    },
  },
  {
    id: 76,
    name: 'PGD Thanh Xuân',
    addressDetail: '601 Nguyễn Trãi',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 257,
      name: 'Thanh Xuân',
    },
  },
  {
    id: 77,
    name: 'PGD Vũ Trọng Phụng',
    addressDetail: 'số 57 Vũ Trọng Phụng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 257,
      name: 'Thanh Xuân',
    },
  },
  {
    id: 78,
    name: 'PGD Láng Thượng',
    addressDetail: 'Tầng 1, Tòa nhà V-Tower số 649 Kim Mã',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 230,
      name: 'Ba Đình',
    },
  },
  {
    id: 79,
    name: 'PGD Ba Đình',
    addressDetail: 'Tầng 1 Tòa nhà Việt Hải, Lô C2-H Cụm Tiểu thủ công nghiệp và công nghiệp nhỏ Cầu Giấy',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 80,
    name: 'PGD Hoàng Quốc Việt',
    addressDetail: '184 Đường Hoàng Quốc Việt',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 81,
    name: 'PGD Trung Hòa Nhân Chính ',
    addressDetail: 'Tòa nhà 29T1 khu đô thị N05 Đông Nam Trần Duy Hưng',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 233,
      name: 'Cầu Giấy',
    },
  },
  {
    id: 82,
    name: 'PGD Hà Tây',
    addressDetail: 'Một phần tầng 1 tòa nhà HUD3 TOWER, số 121 - 123, đường Tô Hiệu',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 239,
      name: 'Hà Đông',
    },
  },
  {
    id: 83,
    name: 'PGD Hoàn Kiếm',
    addressDetail: '69 Trần Xuân Soạn',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 240,
      name: 'Hai Bà Trưng',
    },
  },
  {
    id: 84,
    name: 'PGD Cửa Bắc',
    addressDetail: 'Số 64 và 64B Cửa Bắc',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 85,
    name: 'PGD Lý Nam Đế',
    addressDetail: '36 B/1 Lý Nam Đế',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 242,
      name: 'Hoàn Kiếm',
    },
  },
  {
    id: 86,
    name: 'PGD Lê Đức Thọ',
    addressDetail: 'Tầng 1  tầng 2 nhà số 20 Lô A1 đường Lê Đức Thọ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 247,
      name: 'Nam Từ Liêm',
    },
  },
  {
    id: 87,
    name: 'PGD Tây Hà Nội',
    addressDetail: 'Tầng 1, tòa nhà Tây Hà, đường Tố Hữu, khu đô thị mới Phùng Khoang, tổ 11',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 247,
      name: 'Nam Từ Liêm',
    },
  },
  {
    id: 88,
    name: 'PGD Vương Thừa Vũ',
    addressDetail: '46 Vương Thừa Vũ',
    province: {
      id: 24,
      name: 'Hà Nội',
    },
    district: {
      id: 257,
      name: 'Thanh Xuân',
    },
  },
  {
    id: 89,
    name: 'PGD Kỳ Anh',
    addressDetail: 'Khu phố 3',
    province: {
      id: 25,
      name: 'Hà Tĩnh',
    },
    district: {
      id: 267,
      name: 'Kỳ Anh',
    },
  },
  {
    id: 90,
    name: 'CN HÀ TĨNH',
    addressDetail: 'Số 17 đường Trần Phú',
    province: {
      id: 25,
      name: 'Hà Tĩnh',
    },
    district: {
      id: 263,
      name: 'Hà Tĩnh',
    },
  },
  {
    id: 91,
    name: 'PGD Nguyễn Du',
    addressDetail: '163 Đường Nguyễn Công Trứ',
    province: {
      id: 25,
      name: 'Hà Tĩnh',
    },
    district: {
      id: 263,
      name: 'Hà Tĩnh',
    },
  },
  {
    id: 92,
    name: 'PGD Thành Sen',
    addressDetail: '63 Đường Nguyễn Chí Thanh',
    province: {
      id: 25,
      name: 'Hà Tĩnh',
    },
    district: {
      id: 263,
      name: 'Hà Tĩnh',
    },
  },
  {
    id: 93,
    name: 'PGD Hồng Lĩnh',
    addressDetail: '52 Đường Trần Phú',
    province: {
      id: 25,
      name: 'Hà Tĩnh',
    },
    district: {
      id: 264,
      name: 'Hồng Lĩnh',
    },
  },
  {
    id: 94,
    name: 'PGD Lê Thanh Nghị',
    addressDetail: '216-218 Lê Thanh Nghị',
    province: {
      id: 26,
      name: 'Hải Dương',
    },
    district: {
      id: 276,
      name: 'Hải Dương',
    },
  },
  {
    id: 95,
    name: 'CN HẢI DƯƠNG',
    addressDetail: 'Số 11A Trần Hưng Đạo',
    province: {
      id: 26,
      name: 'Hải Dương',
    },
    district: {
      id: 276,
      name: 'Hải Dương',
    },
  },
  {
    id: 96,
    name: 'PGD Nguyễn Lương Bằng',
    addressDetail: 'Ngôi nhà số 205 Nguyễn Lương Bằng',
    province: {
      id: 26,
      name: 'Hải Dương',
    },
    district: {
      id: 276,
      name: 'Hải Dương',
    },
  },
  {
    id: 97,
    name: 'PGD Quang Trung',
    addressDetail: '184 Phố Quang Trung',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 291,
      name: 'Hồng Bàng',
    },
  },
  {
    id: 98,
    name: 'PGD Thủy Nguyên',
    addressDetail: 'Số 26 (số mới 46) đường Đà Nẵng',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 296,
      name: 'Thuỷ Nguyên',
    },
  },
  {
    id: 99,
    name: 'PGD Kiến An',
    addressDetail: '125 Phố Trần Thành Ngọ',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 292,
      name: 'Kiến An',
    },
  },
  {
    id: 100,
    name: 'PGD Lê Chân ',
    addressDetail: '230-232 Đường Tô Hiệu',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 294,
      name: 'Lê Chân',
    },
  },
  {
    id: 101,
    name: 'PGD Trần Nguyên Hãn',
    addressDetail: 'Số 170A đường Trần Nguyên Hãn',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 294,
      name: 'Lê Chân',
    },
  },
  {
    id: 102,
    name: 'CN HẢI PHÒNG',
    addressDetail: '31-33 Phố Phạm Ngũ Lão',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 295,
      name: 'Ngô Quyền',
    },
  },
  {
    id: 103,
    name: 'PGD Lạch Tray',
    addressDetail: '276B Phố Lạch Tray',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 295,
      name: 'Ngô Quyền',
    },
  },
  {
    id: 104,
    name: 'PGD Ngã Sáu ',
    addressDetail: '12 Phố Đà Nẵng',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 295,
      name: 'Ngô Quyền',
    },
  },
  {
    id: 105,
    name: 'PGD Hải An',
    addressDetail: 'Tầng 1 + Tầng lửng và tầng 2 trong ngôi nhà số 346 Văn Cao',
    province: {
      id: 27,
      name: 'Hải Phòng',
    },
    district: {
      id: 290,
      name: 'Hải An',
    },
  },
  {
    id: 106,
    name: 'PGD Sông Đà',
    addressDetail: 'Tổ 13',
    province: {
      id: 29,
      name: 'Hoà Bình',
    },
    district: {
      id: 308,
      name: 'Hoà Bình',
    },
  },
  {
    id: 107,
    name: 'CN HÒA BÌNH',
    addressDetail: 'Số 878 đường Cù Chính Lan',
    province: {
      id: 29,
      name: 'Hoà Bình',
    },
    district: {
      id: 308,
      name: 'Hoà Bình',
    },
  },
  {
    id: 108,
    name: 'PGD Tam Hòa',
    addressDetail: '30/6 đường Phạm Văn Thuận, KP 1',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 175,
      name: 'Biên Hòa',
    },
  },
  {
    id: 109,
    name: 'PGD Bà Chiểu ',
    addressDetail: 'Số 341 Lê Quang Định',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 645,
      name: 'Bình Thạnh',
    },
  },
  {
    id: 110,
    name: 'PGD Bình Thạnh ',
    addressDetail: '659 Xô Viết Nghệ Tĩnh',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 645,
      name: 'Bình Thạnh',
    },
  },
  {
    id: 111,
    name: 'PGD Hàng Xanh',
    addressDetail: '244 Xô Viết Nghệ Tĩnh',
    province: {
      id: 58,
      name: 'TP Hồ Chí Minh',
    },
    district: {
      id: 645,
      name: 'Bình Thạnh',
    },
  },
]

export default BRANCHES
