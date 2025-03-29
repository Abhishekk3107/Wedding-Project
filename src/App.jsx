import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, X, Music, Bot as Lotus, Users, MapPinned } from 'lucide-react';
import Countdown from 'react-countdown';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-maroon shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Ganesha_dancing.svg" 
            alt="Ganesh Ji"
            className="h-12 w-12 filter brightness-0 invert"
          />
          <span className="ml-3 text-white font-dancing text-2xl">Riya & Chirag</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#families" className="text-white hover:text-gold transition-colors">Families</a>
          <a href="#events" className="text-white hover:text-gold transition-colors">Events</a>
          <a href="#rsvp" className="text-white hover:text-gold transition-colors">RSVP</a>
        </div>
      </div>
    </div>
  </nav>
);

const CountdownTimer = () => {
  const weddingDate = new Date('2025-06-04T20:00:00');
  
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="grid grid-cols-4 gap-4 text-center">
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-4xl font-bold text-gold">{days}</div>
        <div className="text-maroon">Days</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-4xl font-bold text-gold">{hours}</div>
        <div className="text-maroon">Hours</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-4xl font-bold text-gold">{minutes}</div>
        <div className="text-maroon">Minutes</div>
      </div>
      <div className="bg-maroon/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="text-4xl font-bold text-gold">{seconds}</div>
        <div className="text-maroon">Seconds</div>
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
  <div className="bg-cream/10 backdrop-blur-sm p-8 rounded-xl border-2 border-gold/20 shadow-2xl animate-scale-in">
    <h3 className="text-3xl font-dancing text-gold mb-6">{title}</h3>
    <div className="space-y-4">
      {members.map((member, index) => (
        <div key={index} className="flex items-center gap-3">
          <Users className="w-6 h-6 text-gold" />
          <span className="text-lg text-maroon/90">{member}</span>
        </div>
      ))}
    </div>
  </div>
);

const EventCard = ({ title, date, time, venue, imageUrl, delay, direction }) => (
  <div 
    className={`relative overflow-hidden bg-cream/10 backdrop-blur-sm p-8 rounded-xl border-2 border-gold/20 shadow-2xl ${
      direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
    }`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 opacity-10">
      <img src={imageUrl} alt="" className="w-full h-full object-cover" />
    </div>
    <div className="relative">
      <h3 className="text-3xl font-dancing text-gold mb-6 animate-glow">{title}</h3>
      <div className="space-y-4 text-maroon/90">
        <p className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-gold" />
          <span className="text-lg">{date}</span>
        </p>
        <p className="flex items-center gap-3">
          <Clock className="w-6 h-6 text-gold" />
          <span className="text-lg">{time}</span>
        </p>
        <p className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-gold" />
          <span className="text-lg">{venue}</span>
        </p>
        <div className="mt-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold/90 text-white px-4 py-2 rounded-lg hover:bg-gold transition-colors"
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
    className="text-center my-12 animate-scale-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <p className="font-dancing text-4xl text-gold italic animate-glow">{text}</p>
  </div>
);

function App() {
  const [showRSVP, setShowRSVP] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', attending: 'yes' });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audio.loop = true;

    if (isPlaying) {
      audio.play().catch(console.error);
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    setShowRSVP(false);
  };

  return (
    <div className="min-h-screen bg-wedding-texture text-gray-800">
      <Navbar />
      
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed top-20 right-6 z-50 bg-gold/90 p-3 rounded-full shadow-xl hover:bg-gold transition-colors duration-300"
      >
        <Music className={`w-6 h-6 text-white ${isPlaying ? 'animate-float' : ''}`} />
      </button>

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 space-y-20">
        <header className="text-center space-y-8 animate-scale-in">
          <div className="flex justify-center">
            <Heart className="w-20 h-20 text-gold animate-float" />
          </div>
          <div className="space-y-6">
            <h1 className="font-dancing text-7xl md:text-8xl text-gold animate-glow">
              Riya & Chirag
            </h1>
            <p className="font-serif text-2xl text-maroon/80">
              Request the pleasure of your company
              <br />
              in celebrating their wedding
            </p>
          </div>
        </header>

        <CountdownTimer />

        <div id="families" className="grid md:grid-cols-2 gap-12">
          <FamilyCard
            title="Bride's Family"
            members={[
              "Riya Dhingra (Bride)",
              "Mr. Rajeev Dhingra (Father)",
              "Mrs. Payal Dhingra (Mother)"
            ]}
          />
          <FamilyCard
            title="Groom's Family"
            members={[
              "Chirag Arora (Groom)",
              "Mr. Ajay Arora (Father)",
              "Mrs. Kusum Arora (Mother)"
            ]}
          />
        </div>

        <Shayari 
          text="Dil se dil ka rishta jodne ka waqt aa gaya, ek nayi zindagi shuru karne ka waqt aa gaya" 
          delay={400}
        />

        <div id="events" className="grid md:grid-cols-2 gap-12">
          <EventCard
            title="Sagayi (Engagement)"
            date="2nd June 2025"
            time="7:00 PM Onwards"
            venue="R.K. Banquet, Rakesh Marg, GT ROAD Ghaziabad, Uttar Pradesh"
            imageUrl="https://images.unsplash.com/photo-1617307322016-56b2fc8b9c4e?auto=format&fit=crop&w=600&q=80"
            delay={800}
            direction="left"
          />
          <EventCard
            title="Shaadi (Wedding)"
            date="4th June 2025"
            time="Baraat Welcome at 8:00 PM"
            venue="F395 Mahindra Enclave, Amrit Banquet Hall, Shastri Nagar, Near Uttam School, Ghaziabad"
            imageUrl="https://images.unsplash.com/photo-1620162009417-6a91a2978d48?auto=format&fit=crop&w=600&q=80"
            delay={1000}
            direction="right"
          />
        </div>

        <div id="rsvp" className="text-center">
          <button
            onClick={() => setShowRSVP(true)}
            className="px-12 py-4 bg-gold/90 hover:bg-gold text-white text-xl rounded-full font-serif tracking-wide transition-all duration-300 transform hover:scale-105 animate-scale-in shadow-xl"
            style={{ animationDelay: '1200ms' }}
          >
            RSVP - DHINGRA FAMILY
          </button>
        </div>
      </div>

      {showRSVP && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setShowRSVP(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-dancing text-gold mb-6 animate-glow">RSVP</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gold focus:ring focus:ring-gold/20"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gold focus:ring focus:ring-gold/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Attending?</label>
                <select
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-gold focus:ring focus:ring-gold/20"
                  value={formData.attending}
                  onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                >
                  <option value="yes">Yes, I will attend</option>
                  <option value="no">No, I cannot attend</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gold/90 hover:bg-gold text-white rounded-lg py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;