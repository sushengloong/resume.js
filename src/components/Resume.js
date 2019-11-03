import React from 'react';
import Header from './Header';
import Education from './Education';
import Work from './Work';
import Footer from './Footer';

export default function Resume() {

  const workData = [
    {
      company: 'Salesforce',
      title: 'Senior Software Engineer',
      dates: [
        'Dec 2018 - Present (San Francisco, CA, USA)',
        'Jun 2017 - Nov 2018 (Singapore)'
      ],
      bulletPoints: [
        'Lead full-stack development of Salesforce Marketing Cloud Einstein data science product features.',
        'Built REST API for UI Single Page App and API integration with other internal Salesforce Marketing Cloud system.',
        'Migrated big data jobs and pipelines to new AWS account.',
        'Built in-house Scala library to implement integration of Salesforce Marketing Cloud Single Sign On.',
        'Scala, Play framework, Apache Spark, AWS (DataPipeline, EMR, EC2, S3, Lambda, Redshift, etc), Python, Django, React, Angular, D3.js, Postgres, MySQL, RabbitMQ, Redis, Jenkins, Terraform, Heroku.'
      ]
    },
    {
      company: 'GovTech Singapore (formerly known as IDA Singapore)',
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
      title: 'Senior Software Engineer',
      dates: ['Nov 2012 - 2014'],
      bulletPoints: [
        'Development and maintenance of flagship stock market data product features including real-time stock quotes, interactive charts, backend data integration, etc.',
        'Development and delivery of CMS-powered websites for public-listed companies.',
        "Conferred ShareInvestor Director's Award for revamping the CMS-backed corporate website of Singapore Press Holdings (SPH).",
        'Ruby on Rails, Java (Grizzly Comet streaming backend and Android app), Objective-C (iPhone app), Perl, PHP, Oracle, MySQL'
      ]
    }
  ]

  const educationData = [
    {
      institution: 'The University of Queensland, Australia',
      program: 'Bachelor of Information Technology',
      gpa: '7 out of 7',
      years: '2010 - 2011',
      bulletPoints: [
        'Best Project Group in Advanced Information Technology Project',
        "Dean's Commendation for High Achievement",
        'UQ EAIT Faculty International Scholarship'
      ]
    }
  ]

  return (
    <main role="main" className="container">
      <Header />
      <hr />
      <Work data={workData} />
      <Education data={educationData} />
      <br />
      <Footer />
    </main>
  );
};
