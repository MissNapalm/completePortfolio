import React from "react";

export const AboutMeContent = () => (
  <div style={{
    padding: '30px',
    color: '#ffffff',
    maxWidth: '900px',
    margin: '0 auto',
    background: '#1e1e1e',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    lineHeight: '1.5',
    minHeight: '100%',
  }}>
    <div style={{
      display: 'flex',
      gap: '25px',
      m      {/* Web Development Section */}
      <div style={{
        background: '#252526',
        padding: '20px',
        borderRadius: '4px',
        marginBottom: '20px',
        border: '1px solid #3e3e42',
      }}>
        <h2 style={{
          fontSize: '16px',
          marginBottom: '16px',
          color: '#ffffff',
          fontWeight: '600',
          borderBottom: '1px solid #3e3e42',
          paddingBottom: '6px'
        }}>Web Development</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          <div style={{
            background: '#1e1e1e',
            padding: '16px',
            borderRadius: '4px',
            border: '1px solid #3e3e42',
          }}>
            <h3 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', marginBottom: '8px' }}>
              Mangione's Italian Kitchen
            </h3>
            <p style={{ fontSize: '12px', color: '#cccccc', marginBottom: '8px' }}>
              Full-stack restaurant website featuring online ordering, menu management, and customer portal. 
              Built with React frontend and Node.js backend with PostgreSQL database.
            </p>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              React • Node.js • PostgreSQL • Stripe Integration
            </div>
          </div>

          <div style={{
            background: '#1e1e1e',
            padding: '16px',
            borderRadius: '4px',
            border: '1px solid #3e3e42',
          }}>
            <h3 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', marginBottom: '8px' }}>
              Self-Driving Car Dashboard
            </h3>
            <p style={{ fontSize: '12px', color: '#cccccc', marginBottom: '8px' }}>
              Interactive dashboard simulation for autonomous vehicles with real-time data visualization, 
              sensor monitoring, and route planning capabilities.
            </p>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              React • Chart.js • WebSocket • Real-time Data
            </div>
          </div>
        </div>
      </div>ottom: '25px',
      alignItems: 'center',
    }}>
      <div style={{
        fontSize: '48px',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #2d2d30 0%, #252526 100%)',
        borderRadius: '12px',
        border: '1px solid #3e3e42',
        boxShadow: 'inset 0 1px 3px rgba(255, 255, 255, 0.1)',
      }}>
        👩‍💻
      </div>
      
      <div style={{ flex: 1 }}>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '600',
          marginBottom: '6px',
          color: '#ffffff',
          letterSpacing: '-0.3px',
        }}>
          Sarah Clark
        </h1>
        <h2 style={{
          fontSize: '14px',
          color: '#cccccc',
          marginBottom: '12px',
          fontWeight: '400',
        }}>
          Frontend Developer & Security Specialist
        </h2>
        <div style={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap'
        }}>
          {['Frontend Development', 'Cybersecurity', 'React.js', 'UI/UX Design'].map(tag => (
            <span key={tag} style={{
              padding: '3px 8px',
              borderRadius: '3px',
              background: '#0e639c',
              fontSize: '11px',
              color: '#ffffff',
              border: '1px solid #1177bb',
              fontWeight: '400',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div style={{
      background: '#252526',
      padding: '20px',
      borderRadius: '4px',
      marginBottom: '16px',
      border: '1px solid #3e3e42',
    }}>
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: '600', 
        marginBottom: '12px', 
        color: '#ffffff',
        borderBottom: '1px solid #3e3e42',
        paddingBottom: '6px'
      }}>
        Professional Summary
      </h3>
      <p style={{ marginBottom: '10px', color: '#cccccc', fontSize: '13px' }}>
        Senior Frontend Developer and Cybersecurity Specialist with 5+ years of experience designing and implementing 
        secure, scalable web applications. Expert in React.js ecosystem, Node.js backend development, and comprehensive 
        security assessment methodologies. Proven track record of delivering high-performance applications while maintaining 
        strict security compliance.
      </p>
      <p style={{ color: '#cccccc', fontSize: '13px' }}>
        Specialized in bridging the gap between user experience and application security, with extensive experience 
        in penetration testing, digital forensics, and security engineering. Committed to mentoring junior developers 
        and contributing to open-source security initiatives.
      </p>
    </div>

    <div style={{
      background: '#252526',
      padding: '20px',
      borderRadius: '4px',
      marginBottom: '16px',
      border: '1px solid #3e3e42',
    }}>
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: '600', 
        marginBottom: '12px', 
        color: '#ffffff',
        borderBottom: '1px solid #3e3e42',
        paddingBottom: '6px'
      }}>
        Professional Experience
      </h3>
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h4 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', margin: '0' }}>
            Senior Security Developer
          </h4>
          <span style={{ fontSize: '11px', color: '#0e639c', fontWeight: '500' }}>2022 - Present</span>
        </div>
        <p style={{ fontSize: '12px', color: '#cccccc', margin: '0 0 8px 0', fontStyle: 'italic' }}>
          CyberTech Solutions • Remote
        </p>
        <ul style={{ fontSize: '12px', color: '#cccccc', marginLeft: '16px', lineHeight: '1.4' }}>
          <li>Led development of security-focused web applications serving 50,000+ users</li>
          <li>Implemented automated vulnerability scanning reducing security incidents by 75%</li>
          <li>Mentored team of 8 junior developers in secure coding practices</li>
        </ul>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h4 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', margin: '0' }}>
            Frontend Developer & Security Analyst
          </h4>
          <span style={{ fontSize: '11px', color: '#0e639c', fontWeight: '500' }}>2020 - 2022</span>
        </div>
        <p style={{ fontSize: '12px', color: '#cccccc', margin: '0 0 8px 0', fontStyle: 'italic' }}>
          TechGuard Industries • Hybrid
        </p>
        <ul style={{ fontSize: '12px', color: '#cccccc', marginLeft: '16px', lineHeight: '1.4' }}>
          <li>Developed React-based dashboard applications with advanced security features</li>
          <li>Conducted penetration testing and security assessments for enterprise clients</li>
          <li>Reduced application vulnerabilities by 60% through secure development practices</li>
        </ul>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h4 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', margin: '0' }}>
            Junior Developer & Security Researcher
          </h4>
          <span style={{ fontSize: '11px', color: '#0e639c', fontWeight: '500' }}>2019 - 2020</span>
        </div>
        <p style={{ fontSize: '12px', color: '#cccccc', margin: '0 0 8px 0', fontStyle: 'italic' }}>
          SecureCode Labs • On-site
        </p>
        <ul style={{ fontSize: '12px', color: '#cccccc', marginLeft: '16px', lineHeight: '1.4' }}>
          <li>Built full-stack applications using Node.js, React, and PostgreSQL</li>
          <li>Performed digital forensics and incident response for security breaches</li>
          <li>Contributed to open-source security tools with 2,000+ GitHub stars</li>
        </ul>
      </div>
    </div>

    <div style={{
      background: '#252526',
      padding: '20px',
      borderRadius: '4px',
      marginBottom: '16px',
      border: '1px solid #3e3e42',
    }}>
      <h3 style={{ 
        fontSize: '16px', 
        fontWeight: '600', 
        marginBottom: '12px', 
        color: '#ffffff',
        borderBottom: '1px solid #3e3e42',
        paddingBottom: '6px'
      }}>
        Education & Certifications
      </h3>
      
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <h4 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', margin: '0' }}>
            Bachelor of Science in Computer Science
          </h4>
          <span style={{ fontSize: '11px', color: '#0e639c', fontWeight: '500' }}>2019</span>
        </div>
        <p style={{ fontSize: '12px', color: '#cccccc', margin: '0', fontStyle: 'italic' }}>
          University of Technology • Cybersecurity Concentration
        </p>
      </div>

      <div style={{ fontSize: '12px', color: '#cccccc' }}>
        <h4 style={{ fontSize: '13px', color: '#ffffff', fontWeight: '600', marginBottom: '6px' }}>
          Professional Certifications:
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {['CEH (Certified Ethical Hacker)', 'OSCP (Offensive Security)', 'AWS Solutions Architect', 'React Developer Certificate'].map(cert => (
            <span key={cert} style={{
              padding: '3px 8px',
              borderRadius: '3px',
              background: '#0e639c',
              fontSize: '10px',
              color: '#ffffff',
              border: '1px solid #1177bb',
              fontWeight: '400',
            }}>
              {cert}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const SkillsContent = () => (
    <div style={{
      padding: '30px',
      color: '#ffffff',
      background: '#1e1e1e',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      minHeight: '100%',
    }}>
      <h1 style={{
        fontSize: '20px',
        marginBottom: '20px',
        textAlign: 'left',
        color: '#ffffff',
        fontWeight: '600',
        borderBottom: '1px solid #3e3e42',
        paddingBottom: '8px',
      }}>Technical Expertise</h1>
  
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        lineHeight: '1.5',
      }}>
        <div style={{
          background: '#252526',
          padding: '20px',
          borderRadius: '4px',
          textAlign: 'left',
          border: '1px solid #3e3e42',
        }}>
          <h2 style={{ fontSize: '16px', marginBottom: '12px', color: '#ffffff', fontWeight: '600' }}>Full-Stack Development</h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Frontend Frameworks & Libraries
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              React.js (Expert) • Next.js (Advanced) • TypeScript (Advanced)
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Backend & Database
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              Node.js (Expert) • Python (Advanced) • Flask (Intermediate) • PostgreSQL (Advanced)
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Additional Technologies
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              C# (Intermediate) • Pygame (Intermediate)
            </div>
          </div>
        </div>
        
        <div style={{
          background: '#252526',
          padding: '20px',
          borderRadius: '4px',
          textAlign: 'left',
          border: '1px solid #3e3e42',
        }}>
          <h2 style={{ fontSize: '16px', marginBottom: '12px', color: '#ffffff', fontWeight: '600' }}>Cybersecurity Specialization</h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Offensive Security
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              Penetration Testing • Malware Research & Development • Security Engineering
            </div>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Defensive Security
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              Digital Forensics • Incident Response • Hardening
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Consulting & Strategy
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              Security Counseling • Risk Assessment • Compliance
            </div>
          </div>
        </div>
        
        <div style={{
          background: '#252526',
          padding: '20px',
          borderRadius: '4px',
          textAlign: 'left',
          border: '1px solid #3e3e42',
        }}>
          <h2 style={{ fontSize: '16px', marginBottom: '12px', color: '#ffffff', fontWeight: '600' }}>Infrastructure & DevOps</h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              System Administration
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              Linux Administration (Expert) • Network Configuration (Advanced)
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Deployment & Automation
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              Docker (Intermediate) • CI/CD Pipelines (Intermediate) • AWS (Advanced)
            </div>
          </div>
        </div>
        
        <div style={{
          background: '#252526',
          padding: '20px',
          borderRadius: '4px',
          textAlign: 'left',
          border: '1px solid #3e3e42',
        }}>
          <h2 style={{ fontSize: '16px', marginBottom: '12px', color: '#ffffff', fontWeight: '600' }}>Professional Skills</h2>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Leadership & Communication
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500', marginBottom: '8px' }}>
              Team Leadership • Technical Mentoring • Client Communication
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', color: '#cccccc', marginBottom: '8px', fontWeight: '500' }}>
              Project Management
            </div>
            <div style={{ fontSize: '10px', color: '#0e639c', fontWeight: '500' }}>
              Agile Methodology • Technical Writing • Code Review
            </div>
          </div>
        </div>
      </div>
      
      <div style={{
        background: '#252526',
        padding: '20px',
        borderRadius: '4px',
        marginTop: '20px',
        border: '1px solid #3e3e42',
        textAlign: 'center',
      }}>
        <h3 style={{ fontSize: '14px', color: '#ffffff', fontWeight: '600', marginBottom: '10px' }}>
          Proficiency Scale
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', color: '#cccccc' }}>
            <strong style={{ color: '#ffffff' }}>Expert:</strong> 5+ years, can teach others
          </span>
          <span style={{ fontSize: '11px', color: '#cccccc' }}>
            <strong style={{ color: '#ffffff' }}>Advanced:</strong> 3+ years, highly proficient
          </span>
          <span style={{ fontSize: '11px', color: '#cccccc' }}>
            <strong style={{ color: '#ffffff' }}>Intermediate:</strong> 1+ years, solid understanding
          </span>
        </div>
      </div>
    </div>
  );

export const EthicalHacksContent = () => (
    <div style={{
      padding: '30px',
      color: '#ffffff',
      background: '#1e1e1e',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
      minHeight: '100%',
    }}>
      <h1 style={{
        fontSize: '20px',
        marginBottom: '20px',
        textAlign: 'left',
        color: '#ffffff',
        fontWeight: '600',
        borderBottom: '1px solid #3e3e42',
        paddingBottom: '8px',
      }}>Featured Projects</h1>
  
      <div style={{ lineHeight: '1.8', marginBottom: '20px' }}>
        <p>
          My journey into ethical hacking has been defined by curiosity, responsibility, and a commitment to improving security. I’ve conducted numerous projects that emulate real-world attacks, always within legal and ethical boundaries. These efforts are driven by a desire to understand vulnerabilities deeply and help organizations strengthen their defenses. Below are some of the ethical hacks I’ve performed and the lessons they taught me.
        </p>
      </div>
  
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {[
                      {
                        title: "Exploited Lax MIME type handling to hijack session cookies",
                        description: "Exploited lax MIME type handling in web browsers to execute hidden JavaScript code. The exercise underscored the critical need for strict MIME type enforcement and robust web application security.",
                      },
                      {
                        title: "Evaded Linux and Windows Antivirus by Hiding Backdoors in Files",
                        description: "Demonstrated how attackers could hide backdoors in legitimate files to bypass fully updated antivirus systems. This reinforced the need for advanced anomaly detection tools."
                      },
                      {
                        title: "Built a hacking lab demonstrating how SQL injection CVEs can lead to a ransomware attack",
                        description: "Built an ethical hacking lab demonstrating how a website can be hacked and defaced. I went beyond the project scope by also adding in the ability to compromise the server itself and upload fake ransomware."
                      },
                      {
                        title: "Using AI to find a privilege escalation vector and rooting a Linux laptop",
                        description: "Used AI to scan my Linux Mint laptop for security holes I could use to escalate my privileges. Then I used AI to locate a security hole in Vim that I used to root the machine."

                      },
          {
            title: "Using Wireshark to Decrypt Web Traffic and Spy on Devices",
            description: "Captured the 4-way handshake when a laptop connected to the wifi network, then used the PSK to decrypt and analyze network traffic. This project highlighted the need for additional DNS security, and how easily our privacy can disappear."
          },
          {
            title: "Backdooring Android Phones",
            description: "Demonstrated how malicious APK files could bypass basic security to access SMS history and call logs. This exercise underscored the need for robust app verification processes."
          },
          {
            title: "Stealing Credentials from Memory",
            description: "Exploited memory scraping techniques on Windows 10 to recover Wi-Fi credentials, social security numbers, and more. The project emphasized the importance of memory encryption and access controls."
          },
          {
            title: "Fork Bomb Exploits",
            description: "Simulated a fork bomb to crash systems, showcasing the dangers of uncontrolled processes. The project reinforced the importance of resource quotas and monitoring."
          },
          {
            title: "Deauthentication Attacks",
            description: "Performed Wi-Fi deauthentication attacks to showcase network vulnerabilities and the risks of rogue access points. This hack educated users about WPA3 and anti-deauth measures."
          },
          {
            title: "Tracing Cybercriminals via Wiretap",
            description: "Analyzed a simulated wiretap to identify and trace a suspect. This task involved packet analysis and highlighted the potential of OSINT for attribution."
          },
          {
            title: "Hackthebox Capture-the-Flag: 'Boardlight'",
            description: "Compromised a web server through the 'dirty pipe' exploit, then used LinPEAS to find an additional CVE and get root access to the machine."
          },
          {
            title: "IP Tracing and Geolocation",
            description: "Used stolen IP addresses to demonstrate how attackers might geolocate targets. This exercise emphasized privacy risks and the importance of VPNs."
          },
          {
            title: "Wi-Fi Handshake Theft",
            description: "Captured WPA2 handshakes to illustrate the risks of weak passwords and outdated encryption standards. The project underscored the critical role of secure passphrases."
          },
          {
            title: "Wi-Fi Jamming with Flipper Zero",
            description: "Simulated Wi-Fi jamming attacks to showcase the vulnerabilities of unprotected networks. It highlighted the importance of frequency hopping and secure protocols."
          },
          {
            title: "Decrypting Browser History",
            description: "Recovered and decrypted browser history files to demonstrate the potential risks of unencrypted local storage. It reinforced the importance of securing cached data."
          },
          {
            title: "OSINT Investigations",
            description: "Used open-source intelligence techniques to uncover publicly available data on mock targets. This exercise showed how seemingly harmless information can be weaponized."
          },
        ].map((hack, index) => (
          <div key={index} style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '15px',
            padding: '25px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <h3 style={{
              fontSize: '13px',
              marginBottom: '15px',
              color: '#fff'
            }}>{hack.title}</h3>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              {hack.description}
            </p>
          </div>
        ))}
      </div>
  
      <div style={{ marginTop: '30px', lineHeight: '1.8' }}>
        <p>
          These projects were conducted in controlled environments with the utmost respect for ethical guidelines. By identifying and demonstrating vulnerabilities, my goal is to educate and empower organizations to stay ahead of potential threats. Each hack taught me invaluable lessons about security and resilience, reinforcing my commitment to responsible and impactful work.
        </p>
        <p>
          I am proud of these achievements, but I remain humble and aware of the evolving nature of cybersecurity. There is always more to learn, and I approach every new project with the same curiosity and dedication that first drew me to this field.
        </p>
      </div>
    </div>
  );
  

export const NonprofitContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
  }}>
    <div style={{
      textAlign: 'center',
      marginBottom: '40px'
    }}>
      <h1 style={{
        fontSize: '21px',
        marginBottom: '15px',
        color: '#fff'
      }}>Digital Justice Initiative</h1>
      <p style={{
        fontSize: '18px',
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6'
      }}>
        Developing forensic software tools for law enforcement agencies
      </p>
    </div>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {[
        { name: 'Evidence Tracker Pro', status: 'Deployed' },
        { name: 'Mobile Analysis Suite', status: 'Development' },
        { name: 'Community Security Platform', status: 'Beta' }
      ].map((project, index) => (
        <div key={index} style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '25px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ fontSize: '13px', marginBottom: '10px' }}>{project.name}</h3>
            <span style={{
              fontSize: '9px',
              color: 'rgba(255, 255, 255, 0.7)'
            }}>
              {project.status}
            </span>
          </div>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: project.status === 'Deployed' ? '#4CAF50' : 
                       project.status === 'Development' ? '#FFC107' : '#2196F3'
          }}/>
        </div>
      ))}
    </div>
  </div>
);

export const SettingsContent = () => (
  <div style={{
    padding: '40px',
    color: 'rgba(255, 255, 255, 0.9)',
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%)'
  }}>
    <h1 style={{
      fontSize: '21px',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#fff'
    }}>Settings</h1>

    <div style={{
      display: 'grid',
      gap: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      {['Dark Mode', 'Startup Sound', 'Notifications'].map((setting, index) => (
        <div key={index} style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '20px',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <span>{setting}</span>
          <div style={{
            width: '44px',
            height: '24px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            cursor: 'pointer',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '2px',
              left: '2px',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.9)',
              transition: 'transform 0.2s'
            }}/>
          </div>
        </div>
      ))}
    </div>
  </div>
);
