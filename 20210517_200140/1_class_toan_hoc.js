class toan_hoc {
  giai_phuong_trinh_bac_1(a, b) {
    return (a==0) ? 'phương trình vô nghiệm' : `phương trình có nghiệm: x=` + a/b;
  }
}

module.exports = toan_hoc;