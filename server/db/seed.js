import pool from './index.js';

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Create tables
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        country VARCHAR(100),
        phone VARCHAR(50),
        reason VARCHAR(100) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS milestones (
        id SERIAL PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        short_desc TEXT,
        full_desc TEXT,
        date VARCHAR(50),
        tags TEXT[],
        type VARCHAR(20),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        icon_name VARCHAR(50),
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Seed milestones
    const milestonesData = [
      ['Optimization of Scalable Infrastructure with Azure Lift-and-Shift', 'Theseus helped a client move their old system to Microsoft Azure, making it faster, more flexible, and more cost-effective.', 'Theseus migrated a client\'s legacy infrastructure to Microsoft Azure, ensuring minimal disruption and improved performance.', 'May 2024', ['Azure', 'Cloud Migration', 'Infrastructure'], 'Tech'],
      ['AI-Driven Workflow Optimization with Cross-Platform Integration', 'Theseus engineered a software solution leveraging OpenAI API to integrate with Confluence, Jira, and GitHub.', 'Theseus engineered a cutting-edge software solution that leverages the OpenAI API to seamlessly integrate with critical platforms.', 'January 2023', ['OpenAI', 'Jira', 'GitHub', 'Confluence'], 'Tech'],
      ['Java-Based CI/CD Pipeline Templates with YAML-Driven Automation', 'Theseus built reusable Bamboo templates to automate software deployment.', 'Theseus built reusable Bamboo templates to automate software deployment, improving speed and consistency.', 'January 2024', ['Bamboo', 'CI/CD', 'AWS', 'SonarQube'], 'Tech'],
      ['CI/CD Analysis with Splunk Dashboards', 'Theseus developed powerful Splunk dashboards for an investment management firm.', 'Theseus created easy-to-use Splunk dashboards to help an investment management firm track software deployment logs.', 'November 2020', ['Splunk', 'AWS', 'Azure', 'Dashboards'], 'Product'],
      ['OLAP Architecture Review for Investment Firm', 'Theseus partnered with a $200 billion investment firm to evaluate BigQuery, Snowflake, and Redshift.', 'Theseus helped a $200 billion investment firm evaluate cloud analytics platforms.', 'July 2023', ['BigQuery', 'Snowflake', 'Redshift', 'Analytics'], 'Tech'],
      ['Integration of Snowflake Driver on iCEDQ Platform', 'Theseus automated the integration of the Snowflake JDBC driver into iCEDQ.', 'Theseus integrated the Snowflake JDBC driver into iCEDQ, enabling seamless Snowflake compatibility.', 'April 2024', ['Snowflake', 'Ansible', 'AWS', 'iCEDQ'], 'Tech'],
      ['Holistic Credit Scoring in Emerging Markets using Machine Learning', 'Theseus is developing an alternative credit scoring system for Ethiopia and Kenya.', 'Theseus has embarked on an ambitious project to develop an alternative credit scoring system.', 'March 2024', ['Machine Learning', 'FinTech', 'AI'], 'Product'],
      ['S3 Uploader Integration for Cross-Validation of Financial Modeling', 'In early 2024, Theseus designed a secure file upload feature for analysts.', 'Theseus designed and implemented a file upload feature with AWS Lambda quality checks.', 'April 2024', ['AWS S3', 'Lambda', 'Docker', 'FinTech'], 'Product'],
      ['Comprehensive Implementation of Collibra Data Catalog and Governance Cloud', 'Theseus led projects to implement and improve Collibra.', 'Theseus helped LMI optimize data management with Collibra, automating deployment on EC2.', 'July 2024', ['Collibra', 'Ansible', 'Data Governance'], 'Tech'],
      ['Voice-to-Voice AI System for Sales Persona Simulation', 'Theseus built a voice AI system simulating real-time sales conversations.', 'Theseus developed a voice-to-voice AI conversation system using Inworld API and OpenAI Whisper.', 'July 2023', ['OpenAI', 'Whisper', 'Salesforce', 'Voice AI'], 'Product'],
    ];

    for (const [title, short_desc, full_desc, date, tags, type] of milestonesData) {
      await client.query(
        'INSERT INTO milestones (title, short_desc, full_desc, date, tags, type) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING',
        [title, short_desc, full_desc, date, tags, type]
      );
    }

    // Seed services
    const servicesData = [
      ['Cloud Migration & Infrastructure', 'Seamless migration to AWS, Azure, and GCP with right-sized, auto-scaling, cost-optimized architectures.', 'Cloud'],
      ['AI & Machine Learning Solutions', 'Custom AI models, LLM integrations, voice-to-voice systems, and ML pipelines.', 'Brain'],
      ['CI/CD & DevOps Automation', 'Pipeline templates, Bamboo/GitHub Actions automation, infrastructure-as-code.', 'Workflow'],
      ['Data Engineering & Analytics', 'Data pipeline architecture, Snowflake/Redshift/BigQuery, real-time dashboards.', 'Database'],
      ['Security & Compliance', 'Fine-grained access controls, encryption, automated security assessments.', 'ShieldCheck'],
      ['Software Architecture & Strategy', 'Cross-team alignment, front-end standardization, tech stack evaluation.', 'Code2'],
      ['FinTech & Investment Tech', 'Portfolio analytics, fixed-income platforms, credit scoring models.', 'TrendingUp'],
      ['Business Intelligence & Reporting', 'Interactive dashboards, auto-refresh PowerBI reports, data visualization UIs.', 'BarChart3'],
      ['Global & Emerging Market Solutions', 'Inclusive technology for underserved markets — alternative credit scoring.', 'Globe'],
    ];

    for (const [title, description, icon_name] of servicesData) {
      await client.query(
        'INSERT INTO services (title, description, icon_name) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING',
        [title, description, icon_name]
      );
    }

    await client.query('COMMIT');
    console.log('✅ Database seeded successfully');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Seed error:', err.message);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
