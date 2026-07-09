(function() {
  // 1. Define all pages in order
  const pages = [
    { value: '01_welcome.html', text: '01. Halaman Welcome' },
    { value: '02_login.html', text: '02. Halaman Login' },
    { value: '03_register.html', text: '03. Halaman Register' },
    { value: '04_lupa_password.html', text: '04. Halaman Lupa Password' },
    { value: '05_dashboard_guru.html', text: '05. Dashboard Guru' },
    { value: '06_guru_daftar_kelas.html', text: '06. Guru: Daftar Kelas' },
    { value: '07_guru_buat_kelas.html', text: '07. Guru: Buat Kelas' },
    { value: '08_guru_detail_kelas.html', text: '08. Guru: Detail Kelas' },
    { value: '09_guru_detail_bab.html', text: '09. Guru: Detail Bab' },
    { value: '10_guru_buat_materi.html', text: '10. Guru: Buat Materi' },
    { value: '11_guru_edit_materi.html', text: '11. Guru: Edit Materi' },
    { value: '12_guru_buat_soal.html', text: '12. Guru: Buat Soal' },
    { value: '13_guru_edit_soal.html', text: '13. Guru: Edit Soal' },
    { value: '14_guru_edit_teks_bab.html', text: '14. Guru: Edit Teks Bab' },
    { value: '15_guru_audit_ujian.html', text: '15. Guru: Audit Ujian' },
    { value: '16_siswa_gabung_kelas.html', text: '16. Siswa: Gabung Kelas' },
    { value: '17_siswa_daftar_bab.html', text: '17. Siswa: Daftar Bab' },
    { value: '18_siswa_detail_bab.html', text: '18. Siswa: Detail Bab' },
    { value: '19_siswa_baca_materi.html', text: '19. Siswa: Baca Materi' },
    { value: '20_siswa_daftar_ujian.html', text: '20. Siswa: Daftar Ujian' },
    { value: '21_siswa_tampil_soal.html', text: '21. Siswa: Pengerjaan Soal' },
    { value: '22_siswa_hasil_ujian.html', text: '22. Siswa: Hasil Ujian' },
    { value: '23_siswa_riwayat_ujian.html', text: '23. Siswa: Riwayat Ujian' },
    { value: '24_profil.html', text: '24. Halaman Profil Pengguna' }
  ];

  let currentFile = window.location.pathname.split('/').pop() || '01_welcome.html';
  if (currentFile === 'index.html' || currentFile === '') {
    currentFile = '01_welcome.html';
  }
  const currentIndex = pages.findIndex(p => p.value === currentFile);

  // 2. Render Floating Panel
  const navContainer = document.createElement('div');
  navContainer.id = 'quick-nav-bar';
  navContainer.style.cssText = 'position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0, 0, 0, 0.9); color: #fff; padding: 10px 15px; border-radius: 8px; z-index: 99999; font-family: "Courier New", monospace; font-size: 13px; display: flex; align-items: center; gap: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); border: 2px solid #000;';

  const titleSpan = document.createElement('span');
  titleSpan.style.cssText = 'font-weight: bold; margin-right: 5px; color: #fff;';
  titleSpan.innerText = '📍 WIREFRAME NAVIGATOR:';
  navContainer.appendChild(titleSpan);

  const prevBtn = document.createElement('button');
  prevBtn.innerText = '◀ Prev';
  prevBtn.style.cssText = 'background: #333; color: #fff; border: 1px solid #fff; padding: 4px 8px; cursor: pointer; border-radius: 4px; font-weight: bold; font-family: inherit;';
  prevBtn.disabled = currentIndex <= 0;
  if (currentIndex > 0) {
    prevBtn.onclick = () => { window.location.href = pages[currentIndex - 1].value; };
  } else {
    prevBtn.style.opacity = '0.5';
    prevBtn.style.cursor = 'not-allowed';
  }
  navContainer.appendChild(prevBtn);

  const select = document.createElement('select');
  select.style.cssText = 'background: #222; color: #fff; border: 1px solid #fff; padding: 3px 5px; font-family: inherit; font-size: 12px; max-width: 250px; cursor: pointer; border-radius: 4px;';
  pages.forEach((p, idx) => {
    const opt = document.createElement('option');
    opt.value = p.value;
    opt.innerText = p.text;
    if (idx === currentIndex) opt.selected = true;
    select.appendChild(opt);
  });
  select.onchange = (e) => {
    window.location.href = e.target.value;
  };
  navContainer.appendChild(select);

  const nextBtn = document.createElement('button');
  nextBtn.innerText = 'Next ▶';
  nextBtn.style.cssText = 'background: #333; color: #fff; border: 1px solid #fff; padding: 4px 8px; cursor: pointer; border-radius: 4px; font-weight: bold; font-family: inherit;';
  nextBtn.disabled = currentIndex >= pages.length - 1;
  if (currentIndex < pages.length - 1) {
    nextBtn.onclick = () => { window.location.href = pages[currentIndex + 1].value; };
  } else {
    nextBtn.style.opacity = '0.5';
    nextBtn.style.cursor = 'not-allowed';
  }
  navContainer.appendChild(nextBtn);

  const hideBtn = document.createElement('button');
  hideBtn.innerText = '×';
  hideBtn.title = 'Sembunyikan Panel';
  hideBtn.style.cssText = 'background: transparent; color: #aaa; border: none; font-size: 18px; cursor: pointer; padding: 0 5px; font-weight: bold; font-family: inherit; line-height: 1;';
  
  const toggleBtn = document.createElement('div');
  toggleBtn.id = 'quick-nav-toggle';
  toggleBtn.innerText = '🧭';
  toggleBtn.title = 'Tampilkan Navigator';
  toggleBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; background: rgba(0, 0, 0, 0.9); color: #fff; width: 40px; height: 40px; border-radius: 50%; display: none; justify-content: center; align-items: center; cursor: pointer; z-index: 99999; box-shadow: 0 4px 15px rgba(0,0,0,0.5); border: 2px solid #000; font-size: 20px; text-align: center; line-height: 38px;';

  hideBtn.onclick = () => {
    navContainer.style.display = 'none';
    toggleBtn.style.display = 'flex';
    localStorage.setItem('wireframe-nav-hidden', 'true');
  };

  toggleBtn.onclick = () => {
    navContainer.style.display = 'flex';
    toggleBtn.style.display = 'none';
    localStorage.removeItem('wireframe-nav-hidden');
  };

  navContainer.appendChild(hideBtn);
  document.body.appendChild(navContainer);
  document.body.appendChild(toggleBtn);

  if (localStorage.getItem('wireframe-nav-hidden') === 'true') {
    navContainer.style.display = 'none';
    toggleBtn.style.display = 'flex';
  }

  // 3. Dynamic Interactive Logic for Wireframes
  // Inject standard CSS pointer cursor for interactive elements
  const style = document.createElement('style');
  style.innerHTML = `
    .btn, button, select, input[type="submit"], .sidebar-menu li, .logo-placeholder {
      cursor: pointer !important;
      transition: all 0.2s ease-in-out;
    }
    .btn:hover, button:hover, .sidebar-menu li:hover {
      opacity: 0.8;
      background-color: #eaeaea !important;
      color: #000 !important;
    }
    .btn-primary:hover {
      background-color: #333 !important;
      color: #fff !important;
    }
  `;
  document.head.appendChild(style);

  // Logo redirects to Welcome page
  const logo = document.querySelector('.logo-placeholder');
  if (logo) {
    logo.onclick = () => { window.location.href = '01_welcome.html'; };
  }

  // Sidebar Menu mapping
  const sidebarItems = document.querySelectorAll('.sidebar-menu li');
  sidebarItems.forEach(item => {
    const text = item.innerText.trim().toLowerCase();
    item.onclick = () => {
      if (text.includes('beranda')) {
        if (currentFile.startsWith('16_') || currentFile.startsWith('17_') || currentFile.startsWith('18_') || currentFile.startsWith('19_') || currentFile.startsWith('20_') || currentFile.startsWith('21_') || currentFile.startsWith('22_') || currentFile.startsWith('23_')) {
          window.location.href = '17_siswa_daftar_bab.html';
        } else {
          window.location.href = '05_dashboard_guru.html';
        }
      } else if (text.includes('daftar kelas')) {
        window.location.href = '06_guru_daftar_kelas.html';
      } else if (text.includes('gabung kelas')) {
        window.location.href = '16_siswa_gabung_kelas.html';
      } else if (text.includes('daftar ujian')) {
        window.location.href = '20_siswa_daftar_ujian.html';
      } else if (text.includes('riwayat ujian')) {
        window.location.href = '23_siswa_riwayat_ujian.html';
      } else if (text.includes('profil')) {
        window.location.href = '24_profil.html';
      } else if (text.includes('keluar')) {
        window.location.href = '01_welcome.html';
      }
    };
  });

  // Halaman Khusus: Welcome Halaman
  if (currentFile === '01_welcome.html') {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
      const text = btn.innerText.toLowerCase();
      if (text.includes('masuk')) {
        btn.onclick = () => { window.location.href = '02_login.html'; };
      } else if (text.includes('daftar') || text.includes('mulai')) {
        btn.onclick = () => { window.location.href = '03_register.html'; };
      }
    });
  }

  // Halaman Khusus: Login Halaman
  if (currentFile === '02_login.html') {
    const masukBtn = document.querySelector('.btn-primary');
    const emailInput = document.querySelector('input[type="email"]');
    
    // Add Lupa Password Link
    const formCard = document.querySelector('.card');
    if (formCard) {
      const linksDiv = document.createElement('div');
      linksDiv.style.cssText = 'margin-top: 15px; text-align: center; font-size: 12px;';
      linksDiv.innerHTML = `
        <a href="04_lupa_password.html" style="color: #000; text-decoration: underline; margin-right: 15px;">Lupa Password?</a>
        <a href="03_register.html" style="color: #000; text-decoration: underline;">Belum punya akun? Daftar</a>
      `;
      formCard.appendChild(linksDiv);
    }

    if (masukBtn) {
      masukBtn.onclick = (e) => {
        e.preventDefault();
        const email = emailInput ? emailInput.value.toLowerCase() : '';
        if (email.includes('guru')) {
          window.location.href = '05_dashboard_guru.html';
        } else if (email.includes('siswa')) {
          window.location.href = '16_siswa_gabung_kelas.html';
        } else {
          // Show simulated modal selector
          const choiceOverlay = document.createElement('div');
          choiceOverlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 100000; font-family: "Courier New", monospace;';
          choiceOverlay.innerHTML = `
            <div style="background: #fff; border: 3px solid #000; padding: 25px; max-width: 400px; width: 90%; text-align: center; box-shadow: 5px 5px 0px #000;">
              <h3>Simulasi Masuk</h3>
              <p style="font-size:12px; color:#666; margin-bottom:20px;">Silakan pilih peran untuk simulasi:</p>
              <button id="sim-guru" class="btn btn-primary" style="width: 100%; margin-bottom: 10px; padding: 10px;">Masuk sebagai Guru</button>
              <button id="sim-siswa" class="btn" style="width: 100%; padding: 10px; border: 2px solid #000;">Masuk sebagai Siswa</button>
              <button id="sim-close" style="margin-top: 15px; background: transparent; border: none; text-decoration: underline; cursor: pointer;">Batal</button>
            </div>
          `;
          document.body.appendChild(choiceOverlay);
          
          document.getElementById('sim-guru').onclick = () => {
            window.location.href = '05_dashboard_guru.html';
          };
          document.getElementById('sim-siswa').onclick = () => {
            window.location.href = '16_siswa_gabung_kelas.html';
          };
          document.getElementById('sim-close').onclick = () => {
            document.body.removeChild(choiceOverlay);
          };
        }
      };
    }
  }

  // Halaman Khusus: Register Halaman
  if (currentFile === '03_register.html') {
    const registerBtn = document.querySelector('.btn-primary');
    const formCard = document.querySelector('.card');
    if (formCard) {
      const linksDiv = document.createElement('div');
      linksDiv.style.cssText = 'margin-top: 15px; text-align: center; font-size: 12px;';
      linksDiv.innerHTML = `
        <a href="02_login.html" style="color: #000; text-decoration: underline;">Sudah punya akun? Masuk</a>
      `;
      formCard.appendChild(linksDiv);
    }
    if (registerBtn) {
      registerBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Pendaftaran Berhasil! Mengalihkan ke Halaman Login.');
        window.location.href = '02_login.html';
      };
    }
  }

  // Halaman Khusus: Lupa Password Halaman
  if (currentFile === '04_lupa_password.html') {
    const kirimBtn = document.querySelector('.btn-primary');
    const formCard = document.querySelector('.card');
    if (formCard) {
      const linksDiv = document.createElement('div');
      linksDiv.style.cssText = 'margin-top: 15px; text-align: center; font-size: 12px;';
      linksDiv.innerHTML = `
        <a href="02_login.html" style="color: #000; text-decoration: underline;">Kembali ke Halaman Login</a>
      `;
      formCard.appendChild(linksDiv);
    }
    if (kirimBtn) {
      kirimBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Tautan reset kata sandi telah dikirim ke email Anda!');
        window.location.href = '02_login.html';
      };
    }
  }

  // Halaman Khusus: Dashboard Guru / Kelas Guru
  if (currentFile === '05_dashboard_guru.html') {
    // Make cards clickable
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.onclick = () => { window.location.href = '06_guru_daftar_kelas.html'; };
    });
  }

  if (currentFile === '06_guru_daftar_kelas.html') {
    const buatKelasBtn = document.querySelector('.btn-primary');
    if (buatKelasBtn) {
      buatKelasBtn.onclick = () => { window.location.href = '07_guru_buat_kelas.html'; };
    }
    const lihatDetailBtn = document.querySelector('.card .btn');
    if (lihatDetailBtn) {
      lihatDetailBtn.onclick = () => { window.location.href = '08_guru_detail_kelas.html'; };
    }
  }

  if (currentFile === '07_guru_buat_kelas.html') {
    const simpanBtn = document.querySelector('.btn-primary');
    if (simpanBtn) {
      simpanBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Kelas berhasil dibuat!');
        window.location.href = '06_guru_daftar_kelas.html';
      };
    }
  }

  if (currentFile === '08_guru_detail_kelas.html') {
    // Kelola button
    const kelolaButtons = document.querySelectorAll('.btn');
    kelolaButtons.forEach(btn => {
      if (btn.innerText.toLowerCase().includes('kelola')) {
        btn.onclick = () => { window.location.href = '09_guru_detail_bab.html'; };
      }
    });
  }

  if (currentFile === '09_guru_detail_bab.html') {
    // Let's add action buttons dynamically to make the flow complete
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, idx) => {
      const btnGroup = document.createElement('div');
      btnGroup.style.cssText = 'margin-top: 15px; display: flex; gap: 10px;';
      if (idx === 0) { // Daftar Materi
        btnGroup.innerHTML = `
          <button class="btn btn-primary" onclick="window.location.href='10_guru_buat_materi.html'">+ Tambah Materi</button>
          <button class="btn" onclick="window.location.href='11_guru_edit_materi.html'">Edit Materi</button>
        `;
      } else { // Daftar Soal Kuis
        btnGroup.innerHTML = `
          <button class="btn btn-primary" onclick="window.location.href='12_guru_buat_soal.html'">+ Tambah Soal</button>
          <button class="btn" onclick="window.location.href='13_guru_edit_soal.html'">Edit Soal</button>
        `;
      }
      card.appendChild(btnGroup);
    });

    // Add Edit Teks Bab & Audit Ujian buttons to the title area or page
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      const topActions = document.createElement('div');
      topActions.style.cssText = 'margin-bottom: 20px; display: flex; gap: 10px;';
      topActions.innerHTML = `
        <button class="btn" onclick="window.location.href='14_guru_edit_teks_bab.html'">📝 Edit Teks Bab</button>
        <button class="btn" onclick="window.location.href='15_guru_audit_ujian.html'">🔍 Audit Ujian Siswa</button>
      `;
      mainContent.insertBefore(topActions, mainContent.children[1]);
    }
  }

  // Teacher Forms save simulation
  if (['10_guru_buat_materi.html', '11_guru_edit_materi.html', '12_guru_buat_soal.html', '13_guru_edit_soal.html', '14_guru_edit_teks_bab.html'].includes(currentFile)) {
    const simpanBtn = document.querySelector('.btn-primary');
    if (simpanBtn) {
      simpanBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Berhasil menyimpan data!');
        window.location.href = '09_guru_detail_bab.html';
      };
    }
  }

  if (currentFile === '15_guru_audit_ujian.html') {
    const simpanAuditBtn = document.querySelector('.btn-primary');
    if (simpanAuditBtn) {
      simpanAuditBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Audit berhasil disimpan!');
        window.location.href = '09_guru_detail_bab.html';
      };
    }
  }

  // Siswa Flow
  if (currentFile === '16_siswa_gabung_kelas.html') {
    const gabungBtn = document.querySelector('.btn-primary');
    if (gabungBtn) {
      gabungBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Berhasil bergabung dengan kelas!');
        window.location.href = '17_siswa_daftar_bab.html';
      };
    }
  }

  if (currentFile === '17_siswa_daftar_bab.html') {
    const mulaiBtn = document.querySelector('.btn-primary');
    if (mulaiBtn) {
      mulaiBtn.onclick = () => { window.location.href = '18_siswa_detail_bab.html'; };
    }
  }

  if (currentFile === '18_siswa_detail_bab.html') {
    // Add clickable events for materials and exams
    const listItems = document.querySelectorAll('.main-content li, .card');
    listItems.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes('baca materi') || text.includes('pengertian')) {
        item.style.cursor = 'pointer';
        item.onclick = () => { window.location.href = '19_siswa_baca_materi.html'; };
      } else if (text.includes('kuis') || text.includes('ujian') || text.includes('mulai')) {
        item.style.cursor = 'pointer';
        // Check if there is a button inside or it's a card
        const btn = item.querySelector('.btn');
        if (btn) {
          btn.onclick = (e) => {
            e.stopPropagation();
            window.location.href = '21_siswa_tampil_soal.html';
          };
        } else {
          item.onclick = () => { window.location.href = '21_siswa_tampil_soal.html'; };
        }
      }
    });

    // Make sure direct button works
    const kuisBtn = document.querySelector('.btn-primary');
    if (kuisBtn && kuisBtn.innerText.toLowerCase().includes('kuis')) {
      kuisBtn.onclick = () => { window.location.href = '21_siswa_tampil_soal.html'; };
    }
  }

  if (currentFile === '19_siswa_baca_materi.html') {
    // "Selesai Membaca" button
    const selesaiBtn = document.querySelector('.btn-primary');
    if (selesaiBtn) {
      selcatText = selesaiBtn.innerText.toLowerCase();
      selesaiBtn.onclick = () => {
        alert('Simulasi: Materi berhasil ditandai selesai dibaca!');
        window.location.href = '18_siswa_detail_bab.html';
      };
    }
  }

  if (currentFile === '20_siswa_daftar_ujian.html') {
    // Make table rows or badges clickable
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
      badge.style.cursor = 'pointer';
      badge.onclick = () => { window.location.href = '22_siswa_hasil_ujian.html'; };
    });
  }

  if (currentFile === '21_siswa_tampil_soal.html') {
    // "Kirim Jawaban" or "Selesaikan"
    const submitBtn = document.querySelector('.btn-primary');
    if (submitBtn) {
      submitBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Jawaban berhasil dikirim! Menampilkan hasil ujian.');
        window.location.href = '22_siswa_hasil_ujian.html';
      };
    }
  }

  if (currentFile === '22_siswa_hasil_ujian.html') {
    const backBtn = document.querySelector('.btn-primary') || document.querySelector('.btn');
    if (backBtn) {
      backBtn.onclick = () => { window.location.href = '23_siswa_riwayat_ujian.html'; };
    }
  }

  if (currentFile === '23_siswa_riwayat_ujian.html') {
    const lihatDetailBtns = document.querySelectorAll('.btn');
    lihatDetailBtns.forEach(btn => {
      btn.onclick = () => { window.location.href = '22_siswa_hasil_ujian.html'; };
    });
  }

  if (currentFile === '24_profil.html') {
    const simpanBtn = document.querySelector('.btn-primary');
    if (simpanBtn) {
      simpanBtn.onclick = (e) => {
        e.preventDefault();
        alert('Simulasi: Profil berhasil diperbarui!');
        // Redirect to relevant dashboard depending on current user simulation
        window.location.href = '17_siswa_daftar_bab.html';
      };
    }
  }

})();
