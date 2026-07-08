import os

def insert_after(file_path, search_str, inject_str):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if search_str in content and inject_str not in content:
        content = content.replace(search_str, search_str + inject_str)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Injected into {file_path}")
    else:
        print(f"Match not found or already injected in {file_path}")

# Dashboard
d_search1 = """                                  <td>Magical Venice & Rome</td>
                                  <td>Nov 10 - Nov 17, 2026</td>
                                  <td>$5,100</td>
                                  <td><span class="badge badge-warning">Upcoming</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Manage</button></td>
                              </tr>"""

d_inject1 = """
                              <tr>
                                  <td>Kyoto Sakura Tour</td>
                                  <td>Apr 02 - Apr 10, 2027</td>
                                  <td>$3,800</td>
                                  <td><span class="badge badge-warning">Upcoming</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Manage</button></td>
                              </tr>"""

d_search2 = """                                  <td>INV-2026-089</td>
                                  <td>Sep 12, 2026</td>
                                  <td>$5,100</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>"""

d_inject2 = """
                              <tr>
                                  <td>INV-2026-112</td>
                                  <td>Oct 05, 2026</td>
                                  <td>$2,400</td>
                                  <td><span class="badge badge-success">Paid</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Download</button></td>
                              </tr>"""

d_search3 = """                              <img src="assets/opt_img_10.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Tokyo, Japan</h4>
                              </div>
                          </div>"""

d_inject3 = """
                          <div style="border-radius: var(--radius-md); overflow: hidden; position: relative; cursor: pointer;" onclick="window.location.href='404.html'">
                              <img src="assets/opt_img_16.webp" style="width: 100%; height: 120px; object-fit: cover; display: block;">
                              <div style="position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 10px;">
                                  <h4 style="margin: 0; font-size: 0.9rem;">Cape Town</h4>
                              </div>
                          </div>"""

# Agent Dashboard
a_search1 = """                                  <td>#A-9082</td>
                                  <td>Sarah Jenkins</td>
                                  <td>Kyoto Temples</td>
                                  <td>Apr 12 - Apr 20, 2026</td>
                                  <td>
                                      <div style="display:flex; gap:10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem; border-color: var(--accent-red); color: var(--accent-red);" onclick="window.location.href='404.html'">Decline</button>
                                      </div>
                                  </td>
                              </tr>"""
a_inject1 = """
                              <tr>
                                  <td>#A-9083</td>
                                  <td>Michael Ross</td>
                                  <td>Dubai Luxury</td>
                                  <td>May 05 - May 10, 2026</td>
                                  <td>
                                      <div style="display:flex; gap:10px;">
                                          <button class="dash-btn dash-btn-primary" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Approve</button>
                                          <button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem; border-color: var(--accent-red); color: var(--accent-red);" onclick="window.location.href='404.html'">Decline</button>
                                      </div>
                                  </td>
                              </tr>"""

a_search2 = """                                  <td>Magical Venice & Rome</td>
                                  <td>18 / 20</td>
                                  <td><span class="badge badge-success">Active</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                              </tr>"""
a_inject2 = """
                              <tr>
                                  <td>Kyoto Autumn Leaves</td>
                                  <td>12 / 15</td>
                                  <td><span class="badge badge-success">Active</span></td>
                                  <td><button class="dash-btn dash-btn-outline" style="padding: 5px 15px; font-size: 0.8rem;" onclick="window.location.href='404.html'">Edit</button></td>
                              </tr>"""

a_search3 = """                                  <td>Oct 01, 2026</td>
                                  <td>$12,400.00</td>
                                  <td>**** **** 5678</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                              </tr>"""
a_inject3 = """
                              <tr>
                                  <td>Nov 01, 2026</td>
                                  <td>$14,200.00</td>
                                  <td>**** **** 5678</td>
                                  <td><span class="badge badge-success">Completed</span></td>
                              </tr>"""

def normalize_newlines(text):
    return text.replace('\r\n', '\n')

with open('dashboard.html', 'r', encoding='utf-8') as f:
    d_content = normalize_newlines(f.read())

d_content = d_content.replace(d_search1, d_search1 + d_inject1)
d_content = d_content.replace(d_search2, d_search2 + d_inject2)
d_content = d_content.replace(d_search3, d_search3 + d_inject3)

with open('dashboard.html', 'w', encoding='utf-8', newline='\n') as f:
    f.write(d_content)

with open('agent_dashboard.html', 'r', encoding='utf-8') as f:
    a_content = normalize_newlines(f.read())

a_content = a_content.replace(a_search1, a_search1 + a_inject1)
a_content = a_content.replace(a_search2, a_search2 + a_inject2)
a_content = a_content.replace(a_search3, a_search3 + a_inject3)

with open('agent_dashboard.html', 'w', encoding='utf-8', newline='\n') as f:
    f.write(a_content)

print("Rows injected with line endings normalized!")
