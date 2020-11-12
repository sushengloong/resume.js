import React from 'react';
import Header from './Header';
import Work from './Work';
import Education from './Education';
import Talk from './Talk';
import Certificate from './Certificate';
import Footer from './Footer';

export default function Resume() {

  const workData = [
    {
      company: 'Stripe',
      icon: 'stripe.jpg',
      title: 'Software Engineer',
      dates: [
        'Feb 2020 - Present',
      ],
      bulletPoints: [
        'Built out programmatic and automated sweeps for internal funds transfer and merchant payouts',
        'Launched cross-border and multi-currency payouts in APAC markets.',
        'Leading development of banking redundancy projects and technical assessment of new banking partners.',
        'Tech stack: Ruby, Scala, JavaScript, React, MongoDB, Apache Kafka, Apache Spark, Apache Flink and Apache Airflow.'
      ]
    },
    {
      company: 'Salesforce',
      icon: 'salesforce.png',
      title: 'Senior Software Engineer',
      dates: [
        'Dec 2018 - Jan 2020 (San Francisco, CA, USA)',
        'Jun 2017 - Nov 2018 (Singapore)'
      ],
      bulletPoints: [
        'Developed Scala-based data pipelines and Spark jobs to process and generate models on massive email marketing data.',
        'Scaled data pipelines to handle hundreds of clients and implemented optimizations to reduce average AWS cost by 85%.',
        'Developed web applications (Single Page App + REST API) for clients to build, visualize and interact with custom data science reports.',
        'Built in-house model metric dashboard framework to enable team members to quickly build dashboards using code.',
        'Spearheaded the messaging queue architecture design and implementation work to enable asynchronous data integration among four distributed teams.',
        'Undertook DevOps work to develop tooling, set up CI/CD pipelines and automate configuration management.',
        'Tech stack: Scala, Play framework, Apache Spark, AWS (DataPipeline, EMR, EC2, S3, Lambda and Redshift), Python, Django, React, Angular, D3.js, Postgres, MySQL, RabbitMQ, Redis, Jenkins, Terraform and Heroku.'
      ]
    },
    {
      company: 'GovTech Singapore',
      icon: 'govtech.png',
      title: 'Software Engineer',
      dates: ['Oct 2014 - Jun 2017'],
      bulletPoints: [
        'Developed mission-critical government work pass systems in an Agile project team using Test-driven Development (TDD), Continuous Integration/Delivery (CI/CD) and DevOps.',
        'Conferred Minister of Manpower Award.',
        'Tech stack: Ruby on Rails, Angular.JS, Java, Ansible, Go.CD and Bash.'
      ]
    },
    {
      company: 'ShareInvestor',
      icon: 'shareinvestor.jpg',
      title: 'Senior Software Engineer',
      dates: ['Nov 2012 - Oct 2014'],
      bulletPoints: [
        'Developed flagship stock market data product features such as real-time stock quotes, watchlist alerts, interactive charts and market data integration.',
        "Conferred ShareInvestor Director's Award for revamping the CMS-backed corporate website of Singapore Press Holdings.",
        'Tech stack: Ruby on Rails, Java (Grizzly Comet streaming backend and Android app), Objective-C (iPhone app), Perl, PHP, Oracle and MySQL.'
      ]
    },
    {
      company: 'Accenture',
      icon: 'accenture.jpg',
      title: 'Liferay Portal Developer',
      dates: ['Jul 2012 - Nov 2012'],
      bulletPoints: [
        'Technical consulting for an in-house development project (Accenture Digital Campus).',
        'Tech stack: Java, Liferay, Spring, Hibernate, jQWidgets, JasperReport, MySQL and Tomcat.'
      ]
    },
    {
      company: 'NCS',
      icon: 'ncs.png',
      title: 'Application Consultant',
      dates: ['Sep 2011 - Jun 2012'],
      bulletPoints: [
        'Developed new features and handled production support for enterprise portal applications.',
        'Tech stack: Java EE, Oracle WebLogic Portal, Spring, Struts, Hibernate, Axis2, Oracle UCM, Oracle WebCenter Portal, Liferay, Oracle Database and Microsoft SQL Server.'
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

  const talkData = [
    {
      title: "Enterprise Integration with Ruby",
      deck: "https://speakerdeck.com/sushengloong/enterprise-integration-with-ruby-29-mar-2016-singapore-ruby-meetup",
      event: "Singapore Ruby Meetup",
      eventDate: "Mar 2016"
    },
    {
      title: "5 Random Ruby Tips",
      deck: "https://speakerdeck.com/sushengloong/5-random-ruby-tips",
      event: "Singapore Ruby Meetup",
      eventDate: "Aug 2015"
    },
    {
      title: "Algorithmic Trading for Fun and Profit",
      deck: "https://speakerdeck.com/sushengloong/algorithmic-trading-for-fun-and-profit-red-dot-ruby-conf-2014",
      event: "Red Dot Ruby Conf",
      eventDate: "Jun 2014"
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
      <Talk data={talkData} />
      <Certificate data={certificateData} />
      <hr />
      <Footer />
    </main>
  );
};
