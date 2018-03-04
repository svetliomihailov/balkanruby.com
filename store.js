const store = {
  speakers: [
    {
      image: '/static/images/speakers/holman.png',
      link: 'https://zachholman.com/',
      name: 'Zach Holman',
      company: 'During',
      bio: `
        <p>
          Zach Holman is a developer living in San Francisco. He joined GitHub
          in 2010 as one of their first engineering hires, and helped build and
          grow their product and culture over five years. Currently he’s the
          founder and CEO of ${' '} <a href="https://during.com">During</a>, a
          new calendar to help you during your day. He also advises startups,
          including <a href="https://gitlab.com">GitLab</a> and ${' '}
          <a href="https://dockbit.com">Dockbit</a>.
        </p>
      `,
      talk: 'Keynote',
      description: '<p>To be announced. Stay tuned!</p>',
    },

    {
      image: '/static/images/speakers/rmosolgo.png',
      link: 'https://rmosolgo.github.io/',
      name: 'Robert Mosolgo',
      company: 'GitHub',
      bio: `
        <p>
          Robert is a Ruby developer at GitHub, focused on the GraphQL API. In
          his free time, he likes spending time with his family, reading about
          programming language design, and doing upholstery projects.
        </p>
      `,
      talk: 'GraphQL',
      description: '<p>To be announced. Stay tuned!</p>',
    },

    {
      image: '/static/images/speakers/nick.jpg',
      link: 'https://apotonick.wordpress.com/',
      name: 'Nick Sutterer',
      company: 'Trailblazer',
      bio: `
        <p>
          Whenever Open-Source meets deep and profound debates about architecting
          software, and there's free beers involved, Nick Sutterer must be just
          around the corner. Say "Hi!" to him, he loves people.
        </p>
      `,
      talk: 'Trailblazer',
      description: '<p>To be announced. Stay tuned!</p>',
    },

    {
      image: '/static/images/speakers/gabriela.jpg',
      link: 'https://github.com/luhova',
      name: 'Gabriela Luhova',
      company: 'Tutuf',
      bio: `
        <p>
          Rails Girls mentor since 2015. Ruby on Rails developer at Tutuf.
          Faculty of Mathematics and Informatics at the Sofia University
          graduate. Took part in a lot of conferences as an assistant organizer,
          because being part of community is giving me motivation and
          inspiration.
        </p>
      `,
      talk: 'JSON API in the Ruby world',
      description: `
        <p>
          What is JSON API? How can it be used? What are the benefits of it? What
          gems can we use to serialize our ActiveRecord/ActiveModel objects? How
          fast can it be? The JSON API in the Ruby World talk will give answers to
          all of these questions and more.
        </p>
      `
    },

    {
      image: '/static/images/speakers/marko.jpg',
      link: 'https://github.com/bmarkons',
      name: 'Marko Bogdanović',
      company: 'RenderedText',
      bio: `
        <p>
          Spent last summer crafting RubyBench as a participant of Google Summer
          of Code. Recently joined guys at the Semaphore CI as a full time Ruby
          newbie. Most of the non-work time spend on Fruska gora hiking, running
          or preferably mountain biking.
        </p>
      `,
      talk: 'Start your Open Source journey with Ruby Bench',
      description: `
        <p>
          I was last year Google Summer of Code student who joined the Ruby team
          to work on RubyBench project. I really feel like sharing my last summer
          contributions and overall experience - since that's what Open Source is
          mostly about. These were my very first Open Source contributions, and I'd
          be happy to encourage other newcomers like me to give their take to the
          community by joining our efforts together on Ruby Bench project. In the
          first part of the talk I would make a walkthrough of the current state of
          the project, after which we would examine together what's missing on the
          platform that needs your help.
        </p>
      `
    },

    {
      image: '/static/images/speakers/dinah.jpg',
      link: 'https://dinahshi.github.io',
      name: 'Dinah Shi',
      company: 'University of Waterloo',
      bio: `
        <p>
          Dinah is wrapping up her engineering degree at the University of
          Waterloo. In 2017, she spent four months backpacking around Europe and
          China while looking for half-decent WIFI connections to power her
          open-source contributions. For the last few months, she has been
          building a public API to expose more preloading options in Ruby on
          Rails.
        </p>
      `,
      talk: 'Eager Loading for ActiveRecord Performance',
      description: `
        <p>
          As soon as a database has more than a few hundreds rows in any given
          table, it’s time to start thinking about performance in ActiveRecord.
          But performance is hard, with terms like eager loading, preloading, and
          N+1 problems. In this talk, we’ll make sense of those terms, learn how to
          write performant queries, and look at how those query methods work under
          the hood. We’ll also take a peek into the future of eager loading coming
          to a Rails release near you.
        </p>
      `
    },

    {
      image: '/static/images/speakers/vlad.jpg',
      link: 'https://github.com/palkan',
      name: 'Vladimir Dementyev',
      company: 'Evil Martians',
      bio: `
        <p>
          Vladimir is a mathematician who found his happiness in programming Ruby
          and Erlang, contributing to open source and being an Evil Martian.
          Author of AnyCable, TestProf and many yet unknown ukulele melodies.
        </p>
      `,
      talk: 'Take your slow tests to the doctor',
      description: `
        <p>
          Writing tests is a significant part of the development process,
          especially in the Ruby and Rails community. We don’t care about test
          suite performance until we find ourselves wasting too much time
          waiting for the green light.
        </p>

        <p>
          I’ve spent a lot of time analyzing test suites performance and
          developed some useful techniques and tools to make tests faster.
        </p>

        <p>
          Let's me show some profiling and refactoring techniques to make our
          tests healed!
        </p>
      `
    },

    {
      image: '/static/images/speakers/armin.jpg',
      link: 'https://github.com/Krule',
      name: 'Armin Pašalić',
      company: 'solarisBank AG',
      bio: `
        <p>
          Software builder, mostly Ruby and a bit of Go. Passionate about
          "proper" testing, clean architecture and DDD. Currently busy
          constructing a distributed software system with the best colleagues
          ever at <a href="https://solaris.bank/">solarisBank AG</a>.
        </p>
      `,
      talk: 'Beyond the current state: Time travel as answer to hard questions',
      description: `
        <p>
          Current application state; what, in fact, is it? We, as software
          engineers, usually don’t think much about it (unless we face a
          consistency issues in a distributed system, in which case we might
          think about it a LOT). But looking closer, one might realize, in
          essence what is known as current state is just a product of mutations
          over time. Mutations which, as they happen, commonly cause the
          software system to forget about what was, up to that point, known as
          current state. Once this is clear, one starts to wonder, is there a
          beneficial way to utilize this fact?
        </p>
      `
    },

    {
      image: '/static/images/speakers/rado.jpg',
      link: 'https://rstankov.com',
      name: 'Radoslav Stankov',
      company: 'Product Hunt',
      bio: `
        <p>
          Radoslav is a web developer for more than a decade. He believes that
          frontend and backend are equally important. In the last several years
          he juggles between Ruby and JavaScript projects. Organizer of
          <React.NotAConf />. Currently works at Product Hunt.
        </p>
      `,
      talk: 'How to get to zero unhandled exceptions in production',
      description: `
        <p>
          In the talk, I'm going to explain how to categorize exceptions and
          their level of impact. Present use cases and code samples of common
          problems in a Rails application. How to make sure your background
          workers run without issues and how to debug exceptions
        </p>
      `
    },

    {
      image: '/static/images/speakers/jan.jpg',
      link: 'https://jan.krutisch.de',
      name: 'Jan Krutisch',
      company: 'Depfu',
      bio: `
        <p>
          I am a <a href="/coding.html">software developer</a>, <a href="/writings.html">tech writer</a>,
          <a href="/speaking.html">speaker</a> and <a href="http://soundcloud.com/halfbyte">multi</a>
          <a href="http://flickr.com/photos/jankrutisch">purpose</a> <a href="http://github.com/halfbyte">geek</a>.
        </p>
      `,
      talk: 'My Ruby is a Paintbrush. My Ruby is a Synth.',
      description: `
        <p>
          In 2017, Ruby is proven, almost boring technology. We use it mostly
          to build Backends for Hipster Technology™ JavaScript Frontends. But
          Ruby can do so much more - so let’s explore that. Ruby can paint
          pictures. Ruby can make music. As we will see: Ruby can be an
          engineer’s tool, or an artist’s tool.
        </p>

        <p>
          The Ruby community is very much focused on Rails. But while building
          web applications can be fun, in 2017, it is not always the most
          exciting of all jobs. I’m going to show you a handful of interesting
          projects and tools to use Ruby to do things you probably didn’t think
          about. Like making music. Or creating 3D objects. Or driving a light
          show. Or …
        </p>

        <p>
          This talk is going to be a fast paced ride with lots of demos through
          things you can do with Ruby outside of the “Web Development” or even
          the “Scripting Chainsaw” box.
        </p>
      `
    },

    {
      image: '/static/images/speakers/sedar.jpg',
      link: 'https://github.com/sdogruyol',
      name: 'Serdar Doğruyol',
      company: 'Self',
      bio: `
        <p>
          Rubyist, Crystal Evangelist, Creator of Kemal – a lightning fast, super
          simple web framework written in Crystal.
        </p>
      `,
      talk: 'Crystal: A language for humans and computers',
      description: `
        <p>
          I love Ruby! So do we! Let's take a look at Crystal, the younger sibling of Ruby, as Matz said. :-)
        </p>
      `
    },

    {
      image: '/static/images/speakers/nynne.jpg',
      link: 'https://github.com/nynnejc',
      name: 'Nynne Just Christoffersen',
      company: 'Karnov',
      bio: `
        <p>
          Nynne Just Christoffersen is a Copenhagen-based developer with a
          background in Art and Design History. In her spare time she enjoys her
          unhealthy obsession with meetup.com. She's the organiser of Rails Girls
          Copenhagen and the Copenhagen tech book and film club, among many other
          things.
        </p>
      `,
      talk: 'What I learned from building a twitter Art Bot',
      description: `
        <p>
          Rijksbot, is a twitter bot I built with ruby that responds when you tweet to it
          with an image culled from the Rijsmuseums collection, scraped from the museums’
          API. If you tweet the word 'flower' at the bot, It'll bring you an image of a
          flower etc. For this talk I'll reflect on the following:
        </p>

        <ul>
          <li>What is a bot.</li>
          <li>How to we find creative ways to access vast archives of public data?</li>
          <li>What is the value of communicating with images?</li>
          <li>How do we handle messy data?</li>
        </ul>

        <p>
          These questions are shaped equally by my background in art history,
          love of twitter and curiosity.
        </p>

        <p>
          Museums, art collections and libraries are increasingly digitising
          and making their data available to the public. Many museums even offer
          well-documented APIs to play with! As a trained art and design historian, I'm
          particularly keen on investigating the opportunities these vast treasure troves
          of data can offer. But how much fun can we have simply looking at a huge DB?
          With this project, I wanted to bring some interaction and playfulness to the
          wonderful collection of the Rijksmuseum in Amsterdam. The project made me
          appreciative of the many challenges faced by cultural institutions today. With
          this talk I'd love to share my findings.
        </p>
      `
    },

    {
      image: '/static/images/speakers/piotr.jpg',
      link: 'https://chastell.net',
      name: 'Piotr Szotkowski',
      company: 'Rebased',
      bio: `
        <p>
          Hacker scientist. Assistant professor at Warsaw University of Technology
        </p>
      `,
      talk: 'The Modern Prometheus',
      description: `
        <p>
          Most non-scripting languages are faster than Ruby (Rust: tremendously so),
          but few (Crystal?) can match its optimisation for developer happiness and
          productivity. Let’s try to gauge Ruby’s chances when it comes to matching
          modern performance expectations: Are the changes in recent CRuby versions
          significant? Can JRuby bring enough JVM performance? And – to address the
          titular Frankenstein – how easily can we harness the power of Crystal, Rust, C
          or even assembly from within our Ruby applications?
        </p>

        <p>
          If you’ve hung around our community for a few years you probably saw Ruby rise
          from being a pleasant, but niche and slow scripting language to a popular
          choice powering many a web application – and then seemingly overshadowed by a
          plethora of new contenders, from Scala and Clojure through JavaScript (or its
          many tools and derivatives) to Go or even Lua. Most of the alternatives are
          faster or offer compelling design differences (Rust: tremendously so, on both
          counts), but few (Crystal?) can match Ruby’s optimisation for developer
          happiness and developer productivity.
        </p>

        <p>
          This talk, based on experiences in using Ruby for academic research projects,
          attempts to gauge Ruby’s chances when it comes to matching modern performance
          expectations: Are the changes in recent CRuby versions significant? Can JRuby
          bring enough JVM performance? And – to address the titular Frankenstein – how
          easily can we harness the power of Crystal, Rust, C or even assembly from
          within our Ruby applications?
        </p>
      `
    },

    {
      image: '/static/images/speakers/vodro.jpg',
      link: 'http://v0dro.in',
      name: 'Sameer Deshmukh',
      company: 'Tokyo Insitute of Technology',
      bio: `
        <p>
          Sameer is a student and a contributor to the Ruby Science Foundation, where he
          helps build scientific computation tools in Ruby. He is currently working on
          Rubex, a new language for easily writing C extensions for the CRuby
          interpreter. He enjoys spending spare time with friends, books and his bass
          guitar.
        </p>
      `,
      talk: 'Ferrari Driven Development: superfast Ruby with Rubex',
      description: `
        <p>
          Did you ever really really want to speed up your Ruby code with C extensions
          but got baffled by mountains of documentation and scary C programming and chose
          to move to another language instead? Did you wish that you could just release
          that GIL and extract all the juice that your processor has to offer without
          losing your hair? If yes, then come see this talk!
        </p>

        <p>
          This talk will introduce you to Rubex, the fastest and happiest way of writing
          Ruby C extensions. Rubex is a whole new language designed from the ground up
          keeping in mind Ruby's core philosophy - make programmers happy.
        </p>

        <p>
          Rubex allows you to write C extensions using the same syntax that you would
          use for writing Ruby programs, and also freely mix C data types with arbitrary
          Ruby objects. It also allows you to easily (and safely) release the Ruby GIL
          and spawn native threads. The Rubex compiler compiles your Rubex code into
          meaningful C code that it then interfaces with the CRuby interpreter by
          implicitly using the CRuby C API in a manner that is completely transparent to
          the programmer.
        </p>
      `
    },
  ]
};

export default store;
