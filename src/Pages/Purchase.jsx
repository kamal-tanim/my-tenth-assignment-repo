import { motion} from 'framer-motion';
import { CreditCard, Trash2, ShoppingCart, ShieldCheck } from 'lucide-react';




const Purchase = () => {
    return (
      
         <div className="w-full bg-[#0d1117] border border-white/10  overflow-hidden shadow-2xl pt-30">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <ShoppingCart className="text-blue-500" size={20} />
          </div>
          <h2 className="text-lg font-semibold text-white">Purchase Queue</h2>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Total Items</span>
            <span className="bg-white/10 text-white text-xs font-mono px-2 py-1 rounded">03</span>
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="bg-white/[0.03]">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10 w-16">#</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10">Model Details</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-white/40 border-b border-white/10 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {/* Example Row 1 */}
            <tr className="hover:bg-white/[0.02] transition-colors group">
              <td className="px-6 py-5 text-sm font-mono text-white/20">01</td>
              <td className="px-6 py-5">
                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">NeuralNet_v2_Final</div>
                <div className="text-[10px] text-white/30 font-mono mt-0.5 uppercase tracking-tighter">Category: Computer Vision</div>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex justify-end gap-3">
                  <button className="p-2 text-green-500 hover:bg-green-500/10 border border-green-500/20 rounded-lg transition-all shadow-lg shadow-green-900/10">
                    <CreditCard size={18} />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-500/10 border border-red-500/20 rounded-lg transition-all shadow-lg shadow-red-900/10">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>

            {/* Example Row 2 */}
            <tr className="hover:bg-white/[0.02] transition-colors group">
              <td className="px-6 py-5 text-sm font-mono text-white/20">02</td>
              <td className="px-6 py-5">
                <div className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Llama_FineTune_Custom</div>
                <div className="text-[10px] text-white/30 font-mono mt-0.5 uppercase tracking-tighter">Category: NLP / Text</div>
              </td>
              <td className="px-6 py-5 text-right">
                <div className="flex justify-end gap-3">
                  <button className="p-2 text-green-500 hover:bg-green-500/10 border border-green-500/20 rounded-lg transition-all">
                    <CreditCard size={18} />
                  </button>
                  <button className="p-2 text-red-500 hover:bg-red-500/10 border border-red-500/20 rounded-lg transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Area */}
      {/* <div className="p-6 bg-white/[0.03] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-[10px] text-white/20 uppercase font-bold tracking-widest">
          <ShieldCheck size={14} className="text-green-500/50" />
          Secure Payment Protocol Active
        </div>
        
        <div className="flex items-center gap-8">
            <div className="text-right">
                <span className="block text-[10px] text-white/40 uppercase font-bold tracking-widest text-right">Est. Total</span>
                <span className="text-xl font-mono font-bold text-white">$298.00</span>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-10 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/40 uppercase tracking-[0.2em]">
                Pay All
            </button>
        </div>
      </div> */}
    </div>
      
    );
};

export default Purchase;