import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowDownRight, ArrowUpRight, BarChart, Download, LineChart } from 'lucide-react';
import * as React from 'react';

export const Analytics: React.FC = (): React.ReactElement => {
    return (
        <div className={'min-h-screen bg-black text-white p-8'}>
            <div className={'flex justify-between items-center mb-8'}>
                <h1 className={'text-4xl font-light tracking-tight'}>Analýzy</h1>
                <div className={'flex gap-4'}>
                    <Button variant={'outline'} className={'bg-zinc-900 border-zinc-800'}>
                        <Download className={'h-4 w-4 mr-2'} />
                        Exportovat data
                    </Button>
                    <Button className={'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'}>
                        <BarChart className={'h-4 w-4 mr-2'} />
                        Generovat report
                    </Button>
                </div>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Celkové příjmy</CardTitle>
                        <ArrowUpRight className={'h-4 w-4 text-green-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>45 000 Kč</div>
                        <div className={'text-sm text-zinc-400'}>+12.5% oproti minulému měsíci</div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Celkové výdaje</CardTitle>
                        <ArrowDownRight className={'h-4 w-4 text-red-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>32 500 Kč</div>
                        <div className={'text-sm text-zinc-400'}>-5.2% oproti minulému měsíci</div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader className={'flex flex-row items-center justify-between space-y-0 pb-2'}>
                        <CardTitle className={'text-lg'}>Úspory</CardTitle>
                        <ArrowUpRight className={'h-4 w-4 text-green-500'} />
                    </CardHeader>
                    <CardContent>
                        <div className={'text-2xl font-bold'}>12 500 Kč</div>
                        <div className={'text-sm text-zinc-400'}>+28.3% oproti minulému měsíci</div>
                    </CardContent>
                </Card>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle>Výdaje podle kategorií</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'space-y-4'}>
                            <div>
                                <div className={'flex justify-between mb-1'}>
                                    <div className={'text-sm'}>Jídlo</div>
                                    <div className={'text-sm'}>12 500 Kč</div>
                                </div>
                                <Progress value={40} className={'bg-zinc-800'} />
                            </div>
                            <div>
                                <div className={'flex justify-between mb-1'}>
                                    <div className={'text-sm'}>Doprava</div>
                                    <div className={'text-sm'}>8 500 Kč</div>
                                </div>
                                <Progress value={25} className={'bg-zinc-800'} />
                            </div>
                            <div>
                                <div className={'flex justify-between mb-1'}>
                                    <div className={'text-sm'}>Zábava</div>
                                    <div className={'text-sm'}>6 500 Kč</div>
                                </div>
                                <Progress value={20} className={'bg-zinc-800'} />
                            </div>
                            <div>
                                <div className={'flex justify-between mb-1'}>
                                    <div className={'text-sm'}>Ostatní</div>
                                    <div className={'text-sm'}>5 000 Kč</div>
                                </div>
                                <Progress value={15} className={'bg-zinc-800'} />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle>Trend příjmů a výdajů</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex gap-2 mb-4'}>
                            <Button variant={'outline'} size={'sm'}>1M</Button>
                            <Button variant={'outline'} size={'sm'}>3M</Button>
                            <Button variant={'outline'} size={'sm'}>1R</Button>
                        </div>
                        <div className={'h-[300px] bg-zinc-800 rounded-lg flex items-center justify-center'}>
                            <LineChart className={'h-8 w-8 text-zinc-400'} />
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle>Největší výdaje</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'space-y-4'}>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Nákup potravin</div>
                                    <div className={'text-sm text-zinc-400'}>Jídlo</div>
                                </div>
                                <div className={'text-red-500'}>-2 345 Kč</div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Tankování</div>
                                    <div className={'text-sm text-zinc-400'}>Doprava</div>
                                </div>
                                <div className={'text-red-500'}>-1 890 Kč</div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Kino</div>
                                    <div className={'text-sm text-zinc-400'}>Zábava</div>
                                </div>
                                <div className={'text-red-500'}>-450 Kč</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className={'bg-zinc-900 border-zinc-800'}>
                    <CardHeader>
                        <CardTitle>Největší příjmy</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'space-y-4'}>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Plat</div>
                                    <div className={'text-sm text-zinc-400'}>Příjem</div>
                                </div>
                                <div className={'text-green-500'}>+45 000 Kč</div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Prodej Bitcoin</div>
                                    <div className={'text-sm text-zinc-400'}>Investice</div>
                                </div>
                                <div className={'text-green-500'}>+8 765 Kč</div>
                            </div>
                            <div className={'flex items-center justify-between'}>
                                <div>
                                    <div className={'font-medium'}>Úroky z vkladu</div>
                                    <div className={'text-sm text-zinc-400'}>Úspory</div>
                                </div>
                                <div className={'text-green-500'}>+234 Kč</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};