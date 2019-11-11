import React from 'react';
import Header from './Header';
import Work from './Work';
import Education from './Education';
import Certificate from './Certificate';
import Footer from './Footer';

export default function Resume() {

  const workData = [
    {
      company: 'Salesforce',
      icon: 'salesforce.png',
      title: 'Senior Software Engineer',
      dates: [
        'Dec 2018 - Present (San Francisco, CA, USA)',
        'Jun 2017 - Nov 2018 (Singapore)'
      ],
      bulletPoints: [
        'Developed and scaled data pipelines to process and create models on email marketing data for more than 1000 clients.',
        'Developed web applications for clients to build, visualize and interact with custom data science reports.',
        'Built in-house model metric dashboard framework to enable team members to quickly build dashboards using code.',
        'Spearheaded the messaging queue architecture design and implementation work to enable asynchronous data integration among four distributed teams.',
        'Undertook DevOps work to set up CI/CD pipelines and automate configuration management.',
        'Scala, Play framework, Apache Spark, AWS (DataPipeline, EMR, EC2, S3, Lambda, Redshift, etc), Python, Django, React, Angular, D3.js, Postgres, MySQL, RabbitMQ, Redis, Jenkins, Terraform, Heroku.'
      ]
    },
    {
      company: 'GovTech Singapore',
      icon: 'govtech.png',
      title: 'Software Engineer',
      dates: ['Oct 2014 - Jun 2017'],
      bulletPoints: [
        'Development and support of mission-critical government work pass systems in an Agile project team using Test-driven Development (TDD), Continuous Integration/Delivery (CI/CD) and DevOps.',
        'Conferred Minister of Manpower Award.',
        'Ruby on Rails, Angular.JS, Java, Ansible, Go.CD, Bash, etc.'
      ]
    },
    {
      company: 'ShareInvestor',
      icon: 'shareinvestor.jpg',
      title: 'Senior Software Engineer',
      dates: ['Nov 2012 - Oct 2014'],
      bulletPoints: [
        'Development and maintenance of flagship stock market data product features including real-time stock quotes, interactive charts, backend data integration, etc.',
        'Development and delivery of CMS-powered websites for public-listed companies.',
        "Conferred ShareInvestor Director's Award for revamping the CMS-backed corporate website of Singapore Press Holdings (SPH).",
        'Ruby on Rails, Java (Grizzly Comet streaming backend and Android app), Objective-C (iPhone app), Perl, PHP, Oracle, MySQL'
      ]
    }
  ];

  const educationData = [
    {
      institution: 'The University of Queensland, Australia',
      icon: 'uq.jpg',
      program: 'Bachelor of Information Technology',
      gpa: '7 out of 7',
      graduated: 'Jul 2011',
      bulletPoints: [
        'Best Project Group in Advanced Information Technology Project',
        "Dean's Commendation for High Achievement",
        'UQ EAIT Faculty International Scholarship'
      ]
    }
  ];

  const certificateData = [
    {
      name: 'Deep Learning Part II',
      institution: 'University of San Francisco, USA',
      icon: 'usf.png',
      issued: 'May 2019',
      credentialId: '520431140'
    },
    {
      name: 'Deep Learning Specialization',
      institution: 'Coursera',
      icon: 'deeplearningai.jpg',
      issued: 'Oct 2018',
      credentialId: '9JXYEGFHJKDL'
    }
  ];

  return (
    <main role="main" className="container">
      <Header />
      <hr />
      <Work data={workData} />
      <Education data={educationData} />
      <Certificate data={certificateData} />
      <hr />
      <Footer />
    </main>
  );
};
