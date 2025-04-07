import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, X, Music, Bot as Lotus, Users, MapPinned, CalendarHeart } from 'lucide-react';
import img from './Images/ganeshji.png';
import img1 from './Images/img1.jpg';
import img2 from './Images/img5.jpg';

import Countdown from 'react-countdown';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon/95 shadow-lg backdrop-blur-sm border-b border-gold/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <img 
            src={img} 
            alt="Ganesh Ji"
            className="h-12 w-12"
          />
          <span className="ml-3 text-gold font-dancing text-2xl">Riya & Chirag</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#events" className="text-gold hover:text-white transition-colors">Events</a>
          <a href="#families" className="text-gold hover:text-white transition-colors">Families</a>
          <a href="#rsvp" className="text-gold hover:text-white transition-colors">RSVP</a>
        </div>
      </div>
    </div>
  </nav>
);

const CountdownTimer = () => {
  const weddingDate = new Date('2025-06-04T20:00:00');
  
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm border border-gold/20">
        <div className="text-4xl font-bold text-gold">{days}</div>
        <div className="text-maroon font-dancing text-xl">Days</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm border border-gold/20">
        <div className="text-4xl font-bold text-gold">{hours}</div>
        <div className="text-maroon font-dancing text-xl">Hours</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm border border-gold/20">
        <div className="text-4xl font-bold text-gold">{minutes}</div>
        <div className="text-maroon font-dancing text-xl">Min</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm border border-gold/20">
        <div className="text-4xl font-bold text-gold">{seconds}</div>
        <div className="text-maroon font-dancing text-xl">Sec</div>
      </div>
    </div>
  );

  return (
    <div className="my-12 animate-scale-in">
      <h2 className="text-3xl font-dancing text-gold text-center mb-6">Counting down to our special day</h2>
      <Countdown date={weddingDate} renderer={renderer} />
    </div>
  );
};

const FamilyCard = ({ title, members }) => (
  <div className="bg-cream/10 backdrop-blur-sm p-8 rounded-xl border-2 border-gold/20 shadow-2xl animate-scale-in hover:border-gold/40 transition-all duration-300">
    <h3 className="text-3xl font-dancing text-gold mb-6 text-center">{title}</h3>
    <div className="space-y-4">
      {members.map((member, index) => (
        <div key={index} className="flex items-center gap-3 group">
          <Users className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg text-maroon/90 font-medium">{member}</span>
        </div>
      ))}
    </div>
  </div>
);

const EventCard = ({ title, date, time, venue, imageUrl, delay, direction }) => (
  <div 
    className={`relative overflow-hidden bg-cream/10 backdrop-blur-sm p-8 rounded-xl border-2 border-gold/20 shadow-2xl ${
      direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
    } hover:border-gold/40 transition-all duration-300`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 opacity-20">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="relative">
      <h3 className="text-3xl font-dancing text-gold mb-6 animate-glow text-center">{title}</h3>
      <div className="space-y-4 text-maroon/90">
        <p className="flex items-center gap-3 group">
          <Calendar className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg font-medium">{date}</span>
        </p>
        <p className="flex items-center gap-3 group">
          <Clock className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg font-medium">{time}</span>
        </p>
        <p className="flex items-center gap-3 group">
          <MapPin className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-lg font-medium">{venue}</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold/90 text-white px-6 py-2 rounded-full hover:bg-gold transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPinned className="w-5 h-5" />
            View on Map
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Shayari = ({ text, delay }) => (
  <div 
    className="text-center my-16 animate-scale-in px-4"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="max-w-3xl mx-auto bg-cream/5 backdrop-blur-sm p-8 rounded-2xl border border-gold/20">
      <p className="font-dancing text-4xl md:text-5xl text-gold italic animate-glow leading-relaxed">{text}</p>
    </div>
  </div>
);

function App() {
 
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'yes' });
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("https://pagalfree.com/musics/128-Aaj%20Sajeya%20-%20Goldie%20Sohel%20128%20Kbps.mp3")); 

  useEffect(() => {
    audio.loop = true;

    
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction...");
      });

   
    const enableAudio = () => {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
      }
      document.removeEventListener("click", enableAudio);
    };
    document.addEventListener("click", enableAudio);

    return () => {
      audio.pause();
      document.removeEventListener("click", enableAudio);
    };
  }, [audio, isPlaying]);



  return (
    <div className="min-h-screen bg-wedding-texture text-gray-800">
      <Navbar />
      
      <button
      className="fixed top-20 right-6 z-50 bg-gold/90 p-3 rounded-full shadow-xl hover:bg-gold transition-colors duration-300"
      title="Background Music Playing"
    >
       <Music className={`w-6 h-6 text-white ${isPlaying ? 'animate-float' : ''}`} />

    </button>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 space-y-20">
        <header className="text-center space-y-8 animate-scale-in">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-gold animate-float" />
          </div>

          <section className="flex justify-center items-center py-10">
      <div className="relative border-8 border-gold p-2 rounded-3xl shadow-xl">
        <img
          src={img2} // Replace with your image URL
          alt="Bride & Groom Portrait"
          className="w-72 h-96 object-cover rounded-2xl"
        />
      </div>
    </section>

          <div className="space-y-6">
            <h1 className="font-dancing text-7xl md:text-8xl text-gold animate-glow">
              Riya & Chirag
            </h1>
            <p className="font-dancing text-3xl text-maroon/80">
              Request the pleasure of your company
              <br />
              in celebrating their wedding
            </p>
          </div>
        </header>

        <CountdownTimer />

        <Shayari 
          text="Dil se dil ka rishta jodne ka waqt aa gaya, ek nayi zindagi shuru karne ka waqt aa gaya" 
          delay={400}
        />
 <div className="mt-4 text-xl font-semibold text-center text-gold-600 flex items-center justify-center gap-2">
      <CalendarHeart className="mt-4 w-6 h-6 text-gold" /> 
      <span className="mt-4 text-2xl font-bold text-center text-gold uppercase tracking-wide">
       Event </span>  
     
    </div>
        <div id="events" className="grid md:grid-cols-2 gap-12">
          <EventCard
            title="Sagai (Engagement)"
            date="2nd June 2025"
            time="7:00 PM Onwards"
            venue="R.K. Banquet, Rakesh Marg, GT ROAD Ghaziabad, Uttar Pradesh"
            imageUrl="https://cdn.venuelook.com/uploads/space_9208/1497422583_595x400.png"
            delay={800}
            direction="left"
          />
          <EventCard
            title="Haldi / Mehendi"
            date="3rd June 2025"
            time="6:00 PM Onwards"
            venue="J.S.B Party Hall, 49, G.Z.B, Navyug Market, Naya Ganj, Ghaziabad, Uttar Pradesh 201001 via Hapur Rd"
             imageUrl="https://imagewedz.oyoroomscdn.com/medium/photologue/images/city-hotel-naya-ganj-ghaziabad.jpg"
             delay={900}
            direction="right"
          />
          <EventCard
            title="Shadi (Wedding)"
            date="4th June 2025"
            time="Barat Welcome at 8:00 PM"
            venue="F395 Mahindra Enclave, Amrit Banquet Hall, Shastri Nagar, Near Uttam School, Ghaziabad"
            imageUrl="https://media.weddingz.in/photologue/images/poornima-amrit-party-hall-poornima-amrit-party-hall-13.jpeg"
            delay={1100}
            direction="right"
          />
        </div>
        <div className="p-4 rounded-xl underline text-center flex flex-col text-gold items-center">
    
      <Users className="w-8 h-8 text-gold mb-2" />

   
      <h3 className="text-2xl font-semibold text-gold">Family Members</h3>

    </div>
        <div className="flex flex-col justify-center items-center py-10">
      <div className="border-8 border-gray-200 rounded-xl shadow-lg overflow-hidden max-w-4xl">
        <img
          src={img1} // Replace with your image path
          alt="Beautiful Landscape"
          className="w-full h-auto object-cover"
        />
      </div>

      <p className="mt-6 text-lg text-center text-gray-700 italic max-w-2xl">
        "Two families become one, as love unites us forever.  
        May this journey be filled with joy, laughter, and endless love."
      </p>
    </div>

        <div id="families" className="grid md:grid-cols-2 gap-12">
          <FamilyCard
            title="Bride's Family"
            members={[
              "Riya Dhingra (Bride)",
              "Mr. Rajeev Dhingra (Father)",
              "Mrs. Payal Dhingra (Mother)",
              "Pulkit Dhingra (Brother)"
            ]}
          />
          <FamilyCard
            title="Groom's Family"
            members={[
              "Chirag Arora (Groom)",
              "Mr. Ajay Arora (Father)",
              "Mrs. Kusum Arora (Mother)",
              "Gunjan Arora (Sister)",
            ]}
          />
        </div>

        <div id="rsvp" className="text-center">
          <div
            className="inline-block px-12 py-8 bg-cream/10 backdrop-blur-sm text-maroon rounded-xl font-serif tracking-wide transition-all duration-300 transform hover:scale-105 animate-scale-in shadow-xl border-2 border-gold/20 hover:border-gold/40"
            style={{ animationDelay: '1200ms' }}
          >
            <h3 className="text-3xl font-dancing mb-6 text-gold animate-glow">RSVP - Dhingra Family</h3>
            <p className="text-lg mb-4">
              <span className="font-semibold">Mr. Rajeev Dhingra</span><br />
              Ph: 9810380838
            </p>
            <p className="text-lg">
              <span className="font-semibold">Mr. Pulkit Dhingra</span><br />
              Ph: 8700258106
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;